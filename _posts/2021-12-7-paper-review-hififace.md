---
layout: post
title: "HifiFace: 3D Shape and Semantic Prior Guided High Fidelity Face Swapping"
description: "High fidelity face swapping using an end-to-end model."
categories: paper-review
author: Matthew B. Webster
github: mattwebstah
use_math: true
---

[![arXiv](https://img.shields.io/badge/arXiv-2106.09965-brightgreen.svg?style=flat-square)](https://arxiv.org/abs/2106.09965)
[![githubio](https://img.shields.io/static/v1?message=Unofficial%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square)](https://github.com/mindslab-ai/hififace)
> Wang et al. "HifiFace: 3D Shape and Semantic Prior Guided High Fidelity Face Swapping."


## Overview of Approach
The task of face swapping is to apply the face and identity of a person in a source image to the head of another person in a target image.

The HifiFace architecture can be broken up into three primary structures. The _3D shape-aware identity extractor_, the _semantic facial fusion module_, and an encoder-decoder structure that encodes that target image and connects the other components to one another. A high-level overview of the architecture can be seen in the image below.

> ![](/assets/2021-12-7-paper-review-hififace/hififace_arch_500.png)
>
> Image source: *[HifiFace: 3D Shape and Semantic Prior Guided High Fidelity Face Swapping](https://arxiv.org/abs/2106.09965)* (figure 2, pg. 3)


The 3D shape-aware identity extractor provides information about indentity and geometric structure and is comprised of two pretrained models, an arcface-based face recognition model[(Jiankang Deng _et al._)](https://arxiv.org/pdf/1801.07698.pdf) and a 3DMM face model[(Yu Deng _et al._)](https://arxiv.org/pdf/1903.08527.pdf). The encoder takes in the target image and feeds the produced features into both the decoder and the semantic facial fusion module.

The decoder takes in both the encoder's features and the output features of the 3D shape-aware identity extractor. The decoder then feeds it's output into the semantic facial fusion module.

The semantic facial fusion model, responsible for generating the final output image, first generates a face mask that is used to fuse the encoder and decoder representions. From the resulting fused feature respesentation a low resolution face reconstruction is predicted. It is from this low-level reconstruction that the final high resolution image is predicted via an upsampling module.


## 3D Shape-Aware Identity Extractor
> ![](/assets/2021-12-7-paper-review-hififace/hififace_3d.png)
>
> Image source: *[HifiFace: 3D Shape and Semantic Prior Guided High Fidelity Face Swapping](https://arxiv.org/abs/2106.09965)* (figure 3, pg. 4)

The 3D shape-aware identity extractor is comprised of two parts, a 3D face recontruction network and a face recognition network. 

1. The 3D face reconstruction network uses 3DMM[(Yu Deng _et al._)](https://arxiv.org/pdf/1903.08527.pdf), a pretrained 3D face reconstruction model, as an encoder for the face shape features, and is denoted as $F_{3d}$.
    - $c_{s}$ and $c_{t}$ are the coefficiects regressed from $F_{3d}$.
    - $c_{s}$ and $c_{t}$ contain the identity, expression, and posture vectors of the input images $I_{s}$ and $I_{t}$, respectively.
    - $c_{fuse}$ is then the combination of the identity vector from $c_{s}$ with the expression and pose vectors from $c_{t}$.

2. The face recogntion network, denoted as $F_{id}$, is a ResNet architecture pre-trained for the face recognition task via the ArcFace loss[(Jiankang Deng _et al._)](https://arxiv.org/pdf/1801.07698.pdf). 
    - $F_{id}$ takes in as it's input $I_{s}$.
    - The output feature vector, or the identity vector, of $F_{id}$ is denoted as $v_{id}$.

3. The final output of the 3D shape-aware identity extractor, denoted $v_{sid}$, is the concatenation of $c_{fuse}$ and $v_{id}$.

## Semantic Facial Fusion Module
> ![](/assets/2021-12-7-paper-review-hififace/hififace_sff.png)
>
> Image source: *[HifiFace: 3D Shape and Semantic Prior Guided High Fidelity Face Swapping](https://arxiv.org/abs/2106.09965)* (figure 3, pg. 4)
The semantic face fusion module consists of a several step process to generated the final image which is deonted as $I_{r}$.

1. The output mapping of the encoder and decoder, denoted as $z_{enc}$ and $z_{dec}$, are both combined with a generated face mask, denoted $M_{low}$ to produce $z_{fuse}$.
    - $z_{fuse} = M_{low} \odot z_{dec} + (1-M_{low}) \odot \sigma(z_{enc})$, where $\sigma$ is a residual block.

    - $z_{fuse}$ perserves decoder features in the facial region since the decoder features contain information about the source face. Additionally, the non-facial regions are removed via the face mask. This gives us the first term $M_{low} \odot z_{dec}$.
    - On the other hand, the encoder features are better suited for maintaining the information outside of the facial region in the target image. This gives us the second term $(1-M_{low}) \odot \sigma(z_{enc})$.
    
    In summary, $z_{fuse}$ gives us feature-level information outside of the facial region from the direct encoding of the target image and combines it with the feature-level information inside the facial region from the decoder which contains the fused geometric and identity information of $I_{s}$ and $I_{t}$.
2. From $z_{fuse}$ we generate $I_{low}$ for computing an auxiliary loss we will cover in the next section.
3. Next, $z_{fuse}$ is passed into an AdaIN [(Huang _et al._)](https://arxiv.org/pdf/1703.06868.pdf) ResNet block before being passed into a $4\times$ upscaling module denoted as $F_{up}$.
4. The final step in the SFF module is to predict an output image and a dilated mask, and then merge the output image with the target image using the predicted mask.
    - The output image and mask are denoted as $I_{out}$ and $M_{r}$, respectively.
    - Our final generated image is given as $I_{r} = M_{r} \odot I_{out} + (1-M_{r}) \odot I_{t}$.


## Loss Functions
The total loss function of the HifiFace model consists of two parts, a _3D shape-aware identity (SID) loss_ and a _realism loss_.

1. The SID loss consists of a shape loss, denoted $\mathcal{L}_{shape}$, and a identity loss, denoted as $\mathcal{L}_{id}$. The total SID loss can be written as $\mathcal{L}_{sid} = \lambda_{shape}\mathcal{L}_{shape} + \lambda_{id}\mathcal{L}_{id}$. The authors set the scaling factors to $\lambda_{shape}=0.5$ and $\lambda_{id}=5$.
    - To compute $\mathcal{L}_{shape}$ we first regress the 3DMM coeffecients for $I_{r}$ and $I_{low}$. Using these coeffecients we generate a 3D face model and project the 3D facial landmarks onto the 2D image. These 2D facial landmarks are what we use to calculate our loss $\mathcal{L}_{shape}$, the whole process being differentiable. The resulting 2D facial landmarks are denoted as $q^{fuse}$, $q^{r}$, and $q^{low}$, where $q^{fuse}$ is the result of mixing the identity coeffecient regressed from $I_{t}$ with the expression and pose coeffecients regressed from $I_{t}$.
    - $\mathcal{L}_{shape} = \frac{1}{N} \sum_{n=1}^{N} ||q_{n}^{fuse} - q_{n}^{r}||_{1} + ||q_{n}^{fuse} - q_{n}^{low}||_{1}$, where $N$ is the total number of landmarks(???).
    - For the identity loss, we simply maximize(?) the cosine similiarity of the face identity vectors produced by an ArcFace model for the pair $I_{s}$ and $I_{r}$ and for the pair $I_{s}$ and $I_{low}$.
    - $\mathcal{L}_{id} = (1 - cos(v_{id}(I_{s}),v_{id}(I_{r}))) + (1 - cos(v_{id}(I_{s}),v_{id}(I_{low})))$, where $v_{id}$ are the face identity vectors produced by $F_{id}$ for some given input image $I$.

2. The realism loss has five components; an adversarial loss, a segmentation loss, a reconstruction loss, a cycle loss, and a perceptual loss. The total realism loss can be written as $\mathcal{L}_{real} = \mathcal{L}_{adv} + \lambda_{0}\mathcal{L}_{seg} + \lambda_{1}\mathcal{L}_{rec} + \lambda_{2}\mathcal{L}_{cyc} + \lambda_{3}\mathcal{L}_{lpips}$, where $\lambda_{0}=100$, $\lambda_{1}=20$, $\lambda_{2}=1$, and $\lambda_{3}=5$.
    - The adversarial loss is given by the discriminator from StarGAN v2[(Choi _et al._)](https://arxiv.org/pdf/1912.01865.pdf), and the perceptual loss is given by the _learned perceptual image patch similiarity_ (LPIPS) loss[(Zhang _et al._)](https://arxiv.org/pdf/1801.03924.pdf).
    - For the segmentation loss, both $M_{low}$ and $M_{r}$ from the semantic face fusion module are trained to match a dilated version of a face segmentaion network's[(Sun _et al._)](https://arxiv.org/pdf/1904.04514.pdf) output from the target image via an L1 loss. This loss is given as $\mathcal{L}_{seg} = ||R(M_{tar})-M_{low}||_{1} + ||M_{tar}-M_{r}||_{1}$, where $R(.)$ is a resizing operation.
    - The reconstruction loss is fairly straight forward, being given as $\mathcal{L}_{rec} = ||I_{r}-I_{t}||_{1} + ||I_{low}-R(I_{t})||_{1}$.
    - For the cycle loss, we simply aim to reconstruct the target image $I_{t}$ used to generate some image $I_{r}$. This can be given as $\mathcal{L}_{cyc} = ||I_{t}-G(I_{r}, I_{t})||_{1}$.
3. The final loss can be written as $\mathcal{L} = \mathcal{L}_{sid} + \mathcal{L}_{real}$.

## Results
> ![](/assets/2021-12-7-paper-review-hififace/hififace_results_0.png)
>
> Image source: *[HifiFace: 3D Shape and Semantic Prior Guided High Fidelity Face Swapping](https://arxiv.org/abs/2106.09965)* (figure 4, pg. 4)

> ![](/assets/2021-12-7-paper-review-hififace/hififace_results_1.png)
>
> Image source: *[HifiFace: 3D Shape and Semantic Prior Guided High Fidelity Face Swapping](https://arxiv.org/abs/2106.09965)* (figure 1, pg. 1)