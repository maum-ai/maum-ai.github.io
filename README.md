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
- `.md` 최상단에 아래 예시를 따라 front matter를 기입합니다.
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
- Docusaurus Rendering 이후 아래 방식이 잘 되지 않습니다. 다른 글들을 참고하여 진행해주시면 감사하겠습니다.

<!-- 
- 참고: [준혁님 포스트(TBA)](/_posts/2021-07-14-publication-nuwave.md)
- 아래와 같이 **링크 방식을 통일합니다.**
  ```
  ... 본문 중, ASR Using Neural Net[<sup>[1]</sup>](#r1)에서는 ...

  ### References
  1. <a name="r1"></a>V. Kuleshov, S. Z. Enam, and S. Ermon, “Audio super resolution using neural networks,” in *Workshop of International Conference on Learning Representations*, 2017. [[arxiv]][a1] 
  2. <a name="r2"></a> ... [[blog]][a2]

  [a1]: https://arxiv.org/abs/1708.00853
  [a2]: https://mindslab-ai.github.io
  ```
  - 포스트 마지막에 References 소제목을 넣습니다.
  - References 항목은 numbered list`1. 2. ...`로 작성하고, 다음과 같은 anchor를 삽입합니다. `<a name="r{reference_number}"></a>`
  - 본문 중에서 인용표시 방법(번호, 저자명, 윗첨자 등)은 자유입니다.
    - `[1]` or `A. Authors et al` or <sup>[1]</sup> or `[paper_title]`, etc...
  - 인용표시는 항상 해당 anchor로 링크를 걸어줍니다.
    - [[link text]](#r1) `[[link text]](#r1)` 
  - arxiv나 cvpr 링크 등 직접적인 링크는 포스트 맨 하단에 모아서 작성합니다. -->

### 6. Badge 달기
- 참고: [shileds.io](https://shields.io)
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