마인즈랩 브레인 블로그
===
Table of Contents
1. [Local에서 사이트 렌더링하기](#local에서-사이트-렌더링하기)
2. [Branch 관리](#branch-관리)
3. [포스트 작성법](#포스트-작성법)

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
- `design`: 사이트 디자인과 관련된 branch

### 업데이트
- 업데이트 하려는 내용에 따라, `contents`또는 `designs`에서 branch를 새로 생성하여 commit 후 다시 PR합니다
- PR 완료 후, release 결정에 따라 `contents`, `designs`을 master로 merge합니다.

## 포스트 작성법
참고: [jekyll post writing](https://jekyllrb.com/docs/posts/)

### 1. 파일명

- `_posts/` 폴더 하위에 `YYYY-MM-DD-title.md` 파일명으로 포스트를 생성합니다.

### 2. Front matter 
- `.md` 최상단에 아래 예시를 따라 front matter을 기입합니다.
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
- `categories`: 글의 카테고리로, 현재 정해진 카테고리 목록이 있지는 않고 이후에 정해질 예정
  - publication
  - paper-review
  - etc ...
- `author`: 작성자 이름으로 표시되는 이름
- `github`: github 계정명. 입력하면 github 프로필 사진이 함께 표시됩니다

### 3. 본문 작성
- markdown 형식을 따라 작성합니다. 
- 제목은 front matter의 title이 자동으로 렌더링되고, 이후 부제목은 `##`로, 소제목은 `###`로 입력합니다. 
- 부제목`##`은 가능하면 제일 위에 **단 하나만** 쓰는것을 권장합니다. 

### 4. 이미지 넣기
- `assets/{md_file_name}/{name.suffix}`로 파일을 위치시킵니다.
- 아래 예시대로 경로를 작성하면 렌더링 후 표시됩니다.
    ```md
    이미지 파일은 ![alt text](/assets/{md_file_name}/{name.suffix})로 입력합니다.
    ```
- 이미지 속성은 `![alt text](path){: style="inline css syntax"}`를 통해 크기 조정이 가능합니다.
    ```md
    크기 조정 ![alt text](path){: style="width: 200px; height: 150px"}
    ```

### 5. References 넣기
- 팀 특성상 post에 references를 넣는 일이 잦기에 **references 링크 방식을 통일합니다.**

- 본문 마지막에 References 소제목을 넣습니다.

- References 항목은 numbered list`1. 2. ...`로 작성합니다.

- 본문 중에서 인용이 어떤식으로 표시될지는 자유입니다.

  - `[1]` or `A. Authors et al` or <sup>[1]</sup> or `[paper_title]`, etc...

- number 뒤에 다음과 같은 anchor를 삽입합니다. `<a name="r{reference_number}"></a>`
  - 예시 <a name="r1"></a>`<a name="r1"></a>`
    ```md
    1. <a name="r1"></a>V. Kuleshov, S. Z. Enam, and S. Ermon, “Audio super resolution using neural networks,” in *Workshop of International Conference on Learning Representations*, 2017. [[arxiv]][a1] 
    ```
  
- 인용표시는 항상 해당 anchor로 link가 걸려있어야 합니다.
  - 예시 [[link text]](#r1) `[[link text](#r1)` 
    ```md
    Audio Super Resolution Using Neural Networks[<sup>[1]</sup>](#r1)
    ```
  
- arxiv나 cvpr 링크 등 직접적인 링크는 위의 예시처럼 References의 항목에 달아두시면 됩니다.

### Badge

- 자주 쓰이는 링크일 arxiv paper link(특히 제일 윗부분에서), github repo link 등은 badge로 달아 두시는 것을 권장합니다.
- https://shields.io 에 다양한 예시들이 있으니 참고 부탁드립니다.

- arxiv 
  - [![arXiv](https://img.shields.io/badge/arXiv-2104.02321-brightgreen.svg?style=for-the-badge)](https://arxiv.org/abs/2104.02321)
    
    ```
    [![arXiv](https://img.shields.io/badge/arXiv-2104.02321-brightgreen.svg?style=for-the-badge)](https://arxiv.org/abs/2104.02321)
    ```
  - [![arXiv](https://img.shields.io/badge/arXiv-2104.02321-brightgreen.svg?style=flat-square)](https://arxiv.org/abs/2104.02321)
    
    ```
    [![arXiv](https://img.shields.io/badge/arXiv-2104.02321-brightgreen.svg?style=flat-square)](https://arxiv.org/abs/2104.02321)
    ```
- cvpr 
  - [![CVF](https://img.shields.io/badge/CVF-2021.15059-9cf.svg?style=for-the-badge)](https://openaccess.thecvf.com/content/CVPR2021/html/Kim_SetVAE_Learning_Hierarchical_Composition_for_Generative_Modeling_of_Set-Structured_Data_CVPR_2021_paper.html)
    
    ```
    [![CVF](https://img.shields.io/badge/CVF-2021.15059-9cf.svg?style=for-the-badge)](https://openaccess.thecvf.com/content/CVPR2021/html/Kim_SetVAE_Learning_Hierarchical_Composition_for_Generative_Modeling_of_Set-Structured_Data_CVPR_2021_paper.html)
    ```
  - [![CVF](https://img.shields.io/badge/CVF-2021.15059-9cf.svg?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2021/html/Kim_SetVAE_Learning_Hierarchical_Composition_for_Generative_Modeling_of_Set-Structured_Data_CVPR_2021_paper.html)
    
    ```
    [![CVF](https://img.shields.io/badge/CVF-2021.15059-9cf.svg?style=flat-square)](https://openaccess.thecvf.com/content/CVPR2021/html/Kim_SetVAE_Learning_Hierarchical_Composition_for_Generative_Modeling_of_Set-Structured_Data_CVPR_2021_paper.html)
    ```
- github 
  - [![GitHub Repo stars](https://img.shields.io/github/stars/mindslab-ai/nuwave?color=yellow&label=nu-wave&logo=github&style=for-the-badge)](https://github.com/mindslab-ai/nuwave)
    
    ```
    [![GitHub Repo stars](https://img.shields.io/github/stars/mindslab-ai/nuwave?color=yellow&label=nu-wave&logo=github&style=for-the-badge)](https://github.com/mindslab-ai/nuwave)
    ```
  - [![GitHub Repo stars](https://img.shields.io/github/stars/mindslab-ai/nuwave?color=yellow&label=nu-wave&logo=github&style=flat-square)](https://github.com/mindslab-ai/nuwave)
    ```
    [![GitHub Repo stars](https://img.shields.io/github/stars/mindslab-ai/nuwave?color=yellow&label=nu-wave&logo=github&style=flat-square)](https://github.com/mindslab-ai/nuwave)
    ```
- github page 
  - [![githubio](https://img.shields.io/badge/GitHub.io-audio_samples-blue?logo=Github&style=for-the-badge)](https://mindslab-ai.github.io/nuwave/)
    
    ```
    [![githubio](https://img.shields.io/badge/GitHub.io-audio_samples-blue?logo=Github&style=for-the-badge)](https://mindslab-ai.github.io/nuwave/)
    ```
  - [![githubio](https://img.shields.io/badge/GitHub.io-audio_samples-blue?logo=Github&style=flat-square)](https://mindslab-ai.github.io/nuwave/)
    
    ```
    [![githubio](https://img.shields.io/badge/GitHub.io-audio_samples-blue?logo=Github&style=flat-square)](https://mindslab-ai.github.io/nuwave/)
    ```



### 5. 수식 입력
- (TBA)
