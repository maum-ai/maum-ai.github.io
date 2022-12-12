마인즈랩 브레인 블로그
===
**Table of Contents**
- [마인즈랩 브레인 블로그](#마인즈랩-브레인-블로그)
  - [Local에서 사이트 렌더링하기](#local에서-사이트-렌더링하기)
    - [requirements](#requirements)
    - [설치하기](#설치하기)
    - [렌더링하기](#렌더링하기)
    - [접속하기](#접속하기)
  - [Branch 관리](#branch-관리)
    - [주요 branch](#주요-branch)
    - [업데이트](#업데이트)
  - [포스트 작성법](#포스트-작성법)
    - [1. 포스트 생성](#1-포스트-생성)
    - [2. `authors.yml` 에 기입](#2-authorsyml-에-기입)
    - [3. Front matter](#3-front-matter)
    - [3. 본문 작성](#3-본문-작성)
    - [4. 이미지 넣기](#4-이미지-넣기)
    - [5. References 작성](#5-references-작성)
    - [6. Badge 달기](#6-badge-달기)
    - [7. 수식 입력](#7-수식-입력)
    - [8. Emoji 입력](#8-emoji-입력)
  - [Publication 추가하기](#publication-추가하기)
    - [0. 예시 확인하기](#0-예시-확인하기)
    - [1. 학회 넣기](#1-학회-넣기)
    - [2. 제목 넣기](#2-제목-넣기)
    - [3. 저자 넣기](#3-저자-넣기)
    - [4. Abstract 넣기](#4-abstract-넣기)
    - [5. Supplements 넣기](#5-supplements-넣기)
  - [Open Source 추가하기](#open-source-추가하기)
    - [0. 예시 확인하기](#0-예시-확인하기)
    - [1. Github 넣기](#1-github-넣기)
    - [2. 논문 링크 넣기](#2-논문-링크-넣기)
    - [3. 설명 넣기](#3-설명-넣기)


---

## Local에서 사이트 렌더링하기

### requirements
- Node.js >= 14

### 설치하기

```
yarn install --frozen-lockfile
```

### 렌더링하기

Hot Reload를 지원하여 수정하자마자 바로바로 확인하실 수 있습니다.

```
yarn run start
```

### 접속하기
- 출력된 주소(ex. `127.0.0.1:3000`)에 웹브라우저를 사용해 접속합니다.

## Branch 관리
### 주요 branch
- `gh-pages`: public 공개되는 branch입니다. 업데이트 되면 사이트 컴파일에 필요한 시간이 지난 후 `mindslab-ai.github.io`에 반영됩니다.
- `master`: build 할 수 있는 docusaurus template이 있는 branch. push 시 github action에 의해 자동 build 되어 push
- `contents`: 내용(주로 post)과 관련된 branch
- `designs`: 사이트 디자인 및 기능(plugin)과 관련된 branch
### 업데이트
- 업데이트 하려는 내용에 따라, `contents` 또는 `designs` 에서 branch를 새로 생성하여 commit 후 다시 PR합니다
- PR 완료 후, release 결정에 따라 `contents`, `designs`을 master로 merge합니다.

## 포스트 작성법

[`/blog`](./blog) 내 다른 포스트들을 참고하시는 게 빠릅니다!
참고: [Docusaurus docs](https://docusaurus.io/ko/docs/markdown-features)

### 1. 포스트 생성
- `blog/` 폴더 하위에 Post를 담을 폴더명을 생성합니다. 해당 폴더명은 다른 포스트와 양식만 얼추 비슷하게 맞추시면 됩니다.
- 해당 폴더 안에 `index.mdx` (또는 `index.md`) 파일을 만들면, 해당 파일을 기준으로 포스트가 생성됩니다.

::: note

`index.mdx`와 `index.md`의 차이는 `mdx` 내에 JSX로 build하는 구문이 있는지 (쉽게 이야기하면 `javascript` 코드가 있는 지)에 따른 것으로 결정됩니다. `mdx` 가 `md`의 상위호환인 만큼, 최종적으로 push 할 때는 `mdx`로 저장해주시면 좋습니다.

:::

### 2. [`authors.yml`](./blog/authors.yml) 에 기입

Docusaurus는 저자를 `yaml` 파일로 관리할 수 있습니다. 다른 분들의 `yaml` 보고 추가해주세요!
### 3. Front matter 
`.md` 최상단에 아래 예시를 따라 front matter를 기입합니다.

```yaml
---
slug: nu-wave
title: "NU-Wave(Interspeech):"
description: 최초로 48kHz로 upsampling을 성공한 저희 연구를 소개합니다.
image: img/mindslab_default.png
authors: [junjun3518, seungu]
tags: [publication, paper-review]
---
본문...
```

- `slug`: 주소 창에 `slash(/)` 뒤에 어떤 제목으로 붙을 지를 결정합니다.
- `title`: 포스트 제목
- `description`: 포스트에 대한 설명. 포스트 자체에서는 표시 되지 않으나, header에 들어가서 슬랙, 카톡 등에 붙여 넣을 때 preview로서 표시됩니다.
- `image`: 포스트에 대한 preview 그림. 포스트 자체에서는 표시 되지 않으나, header에 들어가서 슬랙, 카톡 등에 붙여 넣을 때 preview로서 표시됩니다. 모르겠으면 `img/mindslab_default.png` 로 넣어주세요.
- `tags`: 글의 카테고리를 입력합니다. 목록 정해지고 확장될 예정.
  - `publication`
  - `paper-review`
  - `news`
  - etc ...
- `authors`: 작성자 이름으로 표시되는 이름. `authors.yml`의 키 값으로 입력해주시면 됩니다.

### 3. 본문 작성

- markdown 형식을 따라 작성합니다. 
- 제목은 front matter의 title이 자동으로 렌더링되고, 이후 부제목은 `##`로, 소제목은 `###`로 입력합니다. 
- 포스트 중에 `<!--truncate-->` 를 입력하면, 해당 글을 preview 할 때 `<!--truncate-->` 직전까지의 부분만 보입니다. 첫 문단에 Contribution을 작성하거나 인사를 남기시고, 다음 문단 오기 전에 넣어주시면 제일 좋을 것 같아요!

### 4. 이미지 넣기
- 자기 폴더 내에 `image` 폴더로 파일을 위치시킵니다.
- 현재 이미지를 javascript로 일일히 렌더링하여 center align 하고 있습니다. 다른 포스트에서 이미지를 넣는 방법을 참고하시어 진행해주시면 감사하겠습니다.
- 모르겠다 싶으실 때는 그냥 ![alt text](./image/) 로 넣어주시고 `contents` 로 push 해주시면 Tech Blog 팀이 알아서 해줄 겁니다.

### 5. References 작성
- Docusaurus Rendering 이후 기존의 손쉬운 reference 방식이 잘 되지 않습니다. 다른 글들을 참고하여 진행해주시면 감사하겠습니다.

### 6. Badge 달기
- 참고: [shields.io](https://shields.io)
- (되도록 포스트 윗부분에서) 포스트에서 주로 다루는 대상의 링크들을 아래와 같이 badge로 달아두면 보기에 좋습니다.
- [![arXiv](https://img.shields.io/badge/arXiv-2104.02321-brightgreen.svg?style=flat-square)](https://arxiv.org/abs/2104.02321) 
[![CVF](https://img.shields.io/badge/CVF-2021.15059-9cf.svg?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2021/html/Kim_SetVAE_Learning_Hierarchical_Composition_for_Generative_Modeling_of_Set-Structured_Data_CVPR_2021_paper.html)
[![GitHub Repo stars](https://img.shields.io/github/stars/mindslab-ai/nuwave?color=yellow&label=nu-wave&logo=github&style=flat-square)](https://github.com/mindslab-ai/nuwave)
[![githubio](https://img.shields.io/badge/GitHub.io-audio_samples-blue?logo=Github&style=flat-square)](https://mindslab-ai.github.io/nuwave/)
[![githubio](https://img.shields.io/static/v1?message=Official%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square)](https://github.com/mindslab-ai/nuwave)
[![Colab](https://img.shields.io/static/v1?message=Open%20in%20Colab&logo=googlecolab&labelColor=grey&color=yellow&logoColor=white&label=%20&style=flat-square)](https://colab.research.google.com/drive/1AK3AI3lS_rXacTIYHpf0mYV4NdU56Hn6?usp=sharing)
  ```
  ## Awesome NU-WAVE!

  ### It has many public links
  ...
  [![arXiv](https://img.shields.io/badge/arXiv-2104.02321-brightgreen.svg?style=flat-square)](https://arxiv.org/abs/2104.02321)
  [![CVF](https://img.shields.io/badge/CVF-2021.15059-9cf.svg?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2021/html/Kim_SetVAE_Learning_Hierarchical_Composition_for_Generative_Modeling_of_Set-Structured_Data_CVPR_2021_paper.html)
  [![GitHub Repo stars](https://img.shields.io/github/stars/mindslab-ai/nuwave?color=yellow&label=nu-wave&logo=github&style=flat-square)](https://github.com/mindslab-ai/nuwave)
  [![githubio](https://img.shields.io/badge/GitHub.io-audio_samples-blue?logo=Github&style=flat-square)](https://mindslab-ai.github.io/nuwave/)
  [![githubio](https://img.shields.io/static/v1?message=Official%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square)](https://github.com/mindslab-ai/nuwave)
  [![Colab](https://img.shields.io/static/v1?message=Open%20in%20Colab&logo=googlecolab&labelColor=grey&color=yellow&logoColor=white&label=%20&style=flat-square)](https://colab.research.google.com/drive/1AK3AI3lS_rXacTIYHpf0mYV4NdU56Hn6?usp=sharing)

  ### The author is awesome
  ...
  ```

### 7. 수식 입력
- 참고: [형규님 ACON 리뷰](/_posts/2021-07-19-paper-review-acon.md)
- KaTeX로 입력됨, latex과 비슷

방법 1: block equation
```
$$
\operatorname{swish}(x):=x \times \sigma(\beta x)=\frac{x}{1+e^{-\beta x}}
$$
```

방법 2: inline
- `$\beta = 0$ 일 경우, Linear function $f(x) = x/2$ 처럼 작용하게 됩니다.`inline으로 작업할때는 `${something}$` 과 같은 식으로 작성가능

### 8. Emoji 입력
- emoji를 복사해서 붙여 넣으면 들어가나 (유니코드 방식), 슬랙처럼 `:{emoji}:` 형식은 지원되지 않습니다.
- 참고: https://apps.timwhitlock.info/emoji/tables/unicode


## Publication 추가하기

Brain팀에 또 하나의 논문이 생겼군요! 아래 내용을 확인하셔서 Tech Blog에 자랑스러운 논문을 추가해주세요😀

### 0. 예시 확인하기

아래 또는 [`publications.mdx`](./src/pages/publications.mdx)에서 Publication 넣는 예시를 확인할 수 있습니다.
```html
<li>
  <features.ConferenceItem conference="Interspeech"/>
  <features.PaperTitle paperLink="https://arxiv.org/abs/2206.08545" title="NU-Wave 2: A General Neural Audio Upsampling Model for Various Sampling Rates"/>
  <features.AuthorItem authors={["Seungu Han", "Junhyeok Lee"]} numFirstAuthor={1} isBrainTeam={[true, true]}/>
  <features.PaperDescription preview="Conventionally, audio super-resolution models fixed the initial and the target sampling rates, which necessitate the model to be trained for each pair of sampling rates. "
  description="We introduce NU-Wave 2, a diffusion model for neural audio upsampling that enables the generation of 48 kHz audio signals from inputs of various sampling rates with a single model. Based on the architecture of NU-Wave, NU-Wave 2 uses short-time Fourier convolution (STFC) to generate harmonics to resolve the main failure modes of NU-Wave, and incorporates bandwidth spectral feature transform (BSFT) to condition the bandwidths of inputs in the frequency domain. We experimentally demonstrate that NU-Wave 2 produces high-resolution audio regardless of the sampling rate of input while requiring fewer parameters than other models."/>
  <features.GithubItem link="https://github.com/mindslab-ai/nuwave2" />
  <features.DemoItem link="https://mindslab-ai.github.io/nuwave2/" />
</li>
```
### 1. 학회 넣기

학회를 아래와 같이 입력해주시면 됩니다.

```html
<features.ConferenceItem conference="Interspeech"/>
```

#### Attribute 목록

- `conference`: 학회 이름을 입력합니다. 학회년도는 생략해주세요. Oral Paper로 선정되는 등 자랑스러운 성과가 있으시면, `(Oral)`을 추가해주셔도 됩니다.

### 2. 제목 넣기

제목을 아래와 같이 입력해주시면 됩니다.

```html
<features.PaperTitle paperLink="https://arxiv.org/abs/2206.08545" title="NU-Wave 2: A General Neural Audio Upsampling Model for Various Sampling Rates"/>
```

#### Attribute 목록

- `paperLink`: 논문 링크를 넣어주시면 됩니다. arXiv 링크도 가능합니다.
- `title`: 논문 제목을 입력해주세요.

### 3. 저자 넣기

저자를 아래와 같이 입력해주시면 됩니다.

```html
<features.AuthorItem authors={["Seungu Han", "Junhyeok Lee"]} numFirstAuthor={1} isBrainTeam={[true, true]}/>
```

`AuthorItem` 은 아래를 자동으로 처리해줍니다.

- 공동 1저자 수만큼 `*` 표시를 통해 1저자를 표시해줍니다. (`numFirstAuthor`)
- MINDsLab Brain팀 여부에 따라 **볼드** 표시를 할 지 결정합니다. (`isBrainTeam`)
- 공저자가 1명, 2명, 3명 이상인 상황에 따라 `and`, `,` 등의 추가를 [Oxford Comma](https://www.grammarly.com/blog/what-is-the-oxford-comma-and-why-do-people-care-so-much-about-it/)를 따라 자동으로 해줍니다.

#### Attribute 목록

- `authors`: 저자 목록 List를 필명으로 넣어주시면 됩니다. Array 인식을 위해 `{}`로 감싸주세요.
- `numFirstAuthor`: 공동 1저자 수를 입력해주세요. 저자 목록 맨 앞부터 해당 수 만큼 1저자 표기를 합니다. Integer 인식을 위해 `{}`로 감싸주세요.
- `isBrainTeam`: 각 저자 분이 MINDsLab Brain팀이신지 표기해주세요. 꼭 저자 인원 수와 동일하게 Array에 boolean 값을 넣어주세요. Array 인식을 위해 `{}`로 감싸주세요.

### 4. Abstract 넣기

아래와 같이 넣어줍니다.

```html
<features.PaperDescription preview="Conventionally, audio super-resolution models fixed the initial and the target sampling rates, which necessitate the model to be trained for each pair of sampling rates. "
description="We introduce NU-Wave 2, a diffusion model for neural audio upsampling that enables the generation of 48 kHz audio signals from inputs of various sampling rates with a single model. Based on the architecture of NU-Wave, NU-Wave 2 uses short-time Fourier convolution (STFC) to generate harmonics to resolve the main failure modes of NU-Wave, and incorporates bandwidth spectral feature transform (BSFT) to condition the bandwidths of inputs in the frequency domain. We experimentally demonstrate that NU-Wave 2 produces high-resolution audio regardless of the sampling rate of input while requiring fewer parameters than other models."/>
```

#### Attribute 목록

- `preview`: `Show More` 누르기 이전에 보여지는 내용을 입력해주세요. 일반적으로 Abstarct 첫 문장만 입력하는 것을 추천합니다.
- `description`: `preview`에 넣은 부분을 제외한 나머지 Abstract를 입력해주세요. 페이지 방문자가 `Show More`을 눌러야 보입니다.

### 5. Supplements 넣기

Github link, demo link 등을 아래와 같이 넣어줍니다. Code나 demo가 아닌 경우 (ex. Screencast), `MiscItem`을 이용하여 추가헤주세요.

```html
<features.GithubItem link="https://github.com/mindslab-ai/nuwave2" />
<features.DemoItem link="https://mindslab-ai.github.io/nuwave2/" />
<features.DemoItem link="https://huggingface.co/spaces/CVPR/ml-talking-face" customName="🤗Demo" />
<features.MiscItem link="https://www.youtube.com/watch?v=toqdD1F_ZsU" customName="Screencast" />
```

CSS 내에서 스타일은 `GithubItem`, `DemoItem`, `MiscItem`에 따라 다르게 처리될 수 있기는 하나, 현재는 스타일이 동일하게 적용되어 있습니다.

#### Attribute 목록

`GithubItem`, `DemoItem`, `MiscItem` 동일한 attribute를 가지고 있습니다.

- `link`: 부가 자료로 가는 링크를 입력합니다.
- `customName` (선택, 필수): 페이지에서 표시되는 이름을 변경할 수 있습니다. `MiscItem`에서는 필수로 입력해야 하며, 그 외에서는 선택입니다. 입력하지 않을 경우, `GithubItem`은 `Github`, `DemoItem`은 `Demo`로 표시됩니다.



## Open Source 추가하기

Open source의 경우, [MINDsLab 공식 Github](https://github.com/mindslab-ai)에 추가하는 것을 권장합니다. 논문 발표와 함께 코드 공개를 하는 경우에는 `Official Repo`로, 다른 논문을 보고 구현한 코드의 경우 `Unofficial Repo`로 등록해주세요. 

### 0. 예시 확인하기

아래 또는 [`open-source.mdx`](./src/pages/open-source.mdx)에서 open source 넣는 예시를 확인할 수 있습니다.
```html
<li>
  <features.StarItem repoName="pnlp-mixer" />
  <features.GithubLinkItem repoName="pnlp-mixer" repoNickname="pNLP-Mixer"  />
  <features.PaperLinkItem paperLink="https://arxiv.org/abs/2202.04350" title="pNLP-Mixer: an Efficient all-MLP Architecture for Language" />
  <p className={styles.description}>
      First successful open-source implementation of <i>pNLP-Mixer</i>.
  </p>
</li>
```
### 1. Github 넣기

`Github repo`를 넣기 위해서는 `StarItem`과 `GithubLinkItem`을 각각 순서대로 입력해주셔야 합니다.  
권장하지는 않으나, 만약 open source가 Github가 아닌 곳 (ex. Bitbucket)에 push 되어 있을 경우, 수동으로 입력해주셔야 합니다.

```html
/* MINDsLab 공식 Github에 있는 Repo 추가할 경우 */
<features.StarItem repoName="pnlp-mixer" />
<features.GithubLinkItem repoName="pnlp-mixer" repoNickname="pNLP-Mixer"  />

/* 개인 Github에 있는 Repo 추가할 경우 */
<features.StarItem userName="seungwonpark" repoName="melgan" />
<features.GithubLinkItem userName="seungwonpark" repoName="melgan" repoNickname="MelGAN" />
```

#### Attribute 목록

`StarItem`과 `GithubLinkItem`은 아래 attribute를 동일하게 갖고 있습니다.

- `userName` (선택): Repo 소유자의 Github username을 입력합니다. 입력하지 않을 경우, `mindslab-ai`로 입력되어 자동적으로 공식 Github에 있는 repo를 가져옵니다.
- `repoName`: Repo 이름을 입력합니다.

`GithubLinkItem`은 아래 attribute를 추가적으로 가지고 있습니다.

- `repoNickname`: 페이지에 표시될 Repo 이름을 입력해주세요.

### 2. 논문 링크 넣기

논문 구현체의 경우, 논문 링크를 함께 표시할 수 있습니다. 아래와 같이 넣어주세요.

```html
<features.PaperLinkItem paperLink="https://arxiv.org/abs/2206.08545" title="NU-Wave 2: A General Neural Audio Upsampling Model for Various Sampling Rates"/>
```
#### Attribute 목록

- `paperLink`: 논문 링크를 넣어주시면 됩니다. arXiv 링크도 가능합니다.
- `title`: 논문 제목을 입력해주세요.

### 3. 설명 넣기

`Official`의 경우, 별도의 설명이 필요하지는 않으나, `Unofficial`의 경우, 추가 설명을 넣는 것을 권장합니다. Github repo 내 `About`과 동일하게 작성하는 것을 권장합니다.  
본 사항은 HTML로 자유롭게 입력하는 경우가 많아, 별도로 함수 작업을 진행하지 않았습니다. `className`만 동일하게 맞추시고, 내용은 자유롭게 입력해주시면 감사하겠습니다.

```html
<p className={styles.description}>
    First successful open-source implementation of <i>pNLP-Mixer</i>.
</p>
```



