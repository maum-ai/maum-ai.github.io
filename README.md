마인즈랩 브레인 블로그
===
**Table of Contents**
- [Local에서 사이트 렌더링하기](#local에서-사이트-렌더링하기)
- [Branch 관리](#branch-관리)
- [포스트 작성법](#포스트-작성법)
    1. [포스트 생성](#1-포스트-생성)
    2. [Front matter](#2-front-matter)
    3. [본문 작성](#3-본문-작성)
    4. [이미지 넣기](#4-이미지-넣기)
    5. [References 작성](#5-references-작성)
    6. [Badge 달기](#6-badge-달기)
---

## Local에서 사이트 렌더링하기
참고: [jekyll installation](https://jekyllrb.com/docs/installation/)

### requirements
- Ruby 2.4.0 +
- RubyGems (package manager)
- gcc, make

### 1. Jekyll setup & run
```bash
$ gem install jekyll bundler
$ git clone https://github.com/mindslab-ai/mindslab-ai.github.io.git
$ cd mindslab-ai.github.io
$ bundle install
$ bundle exec jekyll serve
```
  - `gem install jekyll` 실행시 아래 메시지가 나오면 `ruby-dev`를 설치(ex. `apt install ruby-dev`)한 뒤 실행해보세요
    ```
    ...
    Building native extensions. This could take a while...
    ERROR:  Error installing jekyll:
    ERROR: Failed to build gem native extension.
    ...
    ```
  - `bundle install` 실행시 아래 메시지가 나오면 `Gemfile.lock`을 지운 다음 다시 실행해보세요
    ```
    Can't find gem bundler (>= 0.a) with executable bundle (Gem::GemNotFoundException)
    ```

### 2. 접속하기
- 출력된 주소(ex. `127.0.0.1:4000`)에 웹브라우저를 사용해 접속합니다.


## Branch 관리
### 주요 branch
- `master`: public 공개되는 branch입니다. 업데이트 되면 사이트 컴파일에 필요한 시간이 지난 후 `mindslab-ai.github.io`에 반영됩니다.
- `contents`: 내용(주로 post)과 관련된 branch
- `designs`: 사이트 디자인 및 기능(plugin)과 관련된 branch

Refers to various asset files within the `assets` directory.

  - `assets/css/style.scss` &mdash; Imports sass files from within the `_sass` directory and gets processed into the theme's
    stylesheet: `assets/css/styles.css`.
  - `assets/minima-social-icons.svg` &mdash; A composite SVG file comprised of *symbols* related to various social-media icons.
    This file is used as-is without any processing. Refer [section on social networks](#social-networks) for its usage.

### 1. 포스트 생성
- `_posts/` 폴더 하위에 `YYYY-MM-DD-title.md` 파일명으로 포스트를 생성합니다.

### 2. Front matter 
- `.md` 최상단에 아래 예시를 따라 front matter를 기입합니다.
  ```yaml
  ---
  layout: post
  title: "__init__(brain, blog):"
  description: "Hello community! 마인즈랩 브레인이 블로그를 시작합니다"
  categories: news
  author: MINDs Lab
  github: mindslab-ai
  ---
  본문...
  ```
  - `layout`: `post`로 기재
  - `title`: 포스트 제목
  - `description`: 포스트에 대한 설명. 포스트 목록에서 제목 아래에 표시됩니다.
  - `categories`: 글의 카테고리를 입력합니다. 목록 정해지고 확장될 예정.
    - `publication`
    - `paper-review`
    - `news`
    - etc ...
  - `author`: 작성자 이름으로 표시되는 이름
  - `github`: github 계정명. 입력하면 github 프로필 사진이 함께 표시됩니다

### 3. 본문 작성
- markdown 형식을 따라 작성합니다. 
- 제목은 front matter의 title이 자동으로 렌더링되고, 이후 부제목은 `##`로, 소제목은 `###`로 입력합니다. 
- 부제목`##`은 가능하면 제일 위에 **단 하나만** 쓰는것을 권장합니다. 

### 4. 이미지 넣기
- `assets/{post_file_name}/{image.suffix}`로 파일을 위치시킵니다.
- 아래 예시대로 경로를 작성하면 렌더링 후 표시됩니다.
    ```md
    이미지 파일은 ![alt text](/assets/{post_file_name}/{image.suffix})로 입력합니다.
    ```
- 이미지 속성은 `![alt text](path){: style="inline css syntax"}`를 통해 조정 가능합니다.
    ```md
    크기 조정은 ![alt text](path){: style="width: 200px; height: 150px"} 이렇게 합니다.
    ```

### 5. References 작성
- 참고: [준혁님 포스트(TBA)](/_posts/TBA.md)
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
  - arxiv나 cvpr 링크 등 직접적인 링크는 포스트 맨 하단에 모아서 작성합니다.

### 6. Badge 달기
- 참고: [shileds.io](https://shields.io)
- (되도록 포스트 윗부분에서) 포스트에서 주로 다루는 대상의 링크들을 아래와 같이 badge로 달아두면 보기에 좋습니다.
- [![arXiv](https://img.shields.io/badge/arXiv-2104.02321-brightgreen.svg?style=flat-square)](https://arxiv.org/abs/2104.02321) 
[![CVF](https://img.shields.io/badge/CVF-2021.15059-9cf.svg?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2021/html/Kim_SetVAE_Learning_Hierarchical_Composition_for_Generative_Modeling_of_Set-Structured_Data_CVPR_2021_paper.html)
[![GitHub Repo stars](https://img.shields.io/github/stars/mindslab-ai/nuwave?color=yellow&label=nu-wave&logo=github&style=flat-square)](https://github.com/mindslab-ai/nuwave)
[![githubio](https://img.shields.io/badge/GitHub.io-audio_samples-blue?logo=Github&style=flat-square)](https://mindslab-ai.github.io/nuwave/)
  ```
  ## Awesome NU-WAVE!

  ### It has many public links
  ...
  [![arXiv](https://img.shields.io/badge/arXiv-2104.02321-brightgreen.svg?style=flat-square)](https://arxiv.org/abs/2104.02321)
  [![CVF](https://img.shields.io/badge/CVF-2021.15059-9cf.svg?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2021/html/Kim_SetVAE_Learning_Hierarchical_Composition_for_Generative_Modeling_of_Set-Structured_Data_CVPR_2021_paper.html)
  [![GitHub Repo stars](https://img.shields.io/github/stars/mindslab-ai/nuwave?color=yellow&label=nu-wave&logo=github&style=flat-square)](https://github.com/mindslab-ai/nuwave)
  [![githubio](https://img.shields.io/badge/GitHub.io-audio_samples-blue?logo=Github&style=flat-square)](https://mindslab-ai.github.io/nuwave/)

  ### The author is awesome
  ...
  ```

### 7. 수식 입력
- (TBA)

### 8. Emoji 입력
- (TBA)
