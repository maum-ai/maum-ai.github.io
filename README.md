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
- `author`: 작성자 이름으로 표시되는 이름
- `github`: github 계정명. 입력하면 github 프로필 사진이 함께 표시됩니다

### 3. 본문 작성
- markdown 형식을 따라 작성합니다. 
- 제목은 front matter의 title이 자동으로 렌더링되고, 이후 부제목은 `##`로, 소제목은 `###`로 입력합니다. 

### 4. 이미지 넣기
- `assets/{folder_name}/{name.suffix}`로 파일을 위치시킵니다.
- 아래 예시대로 경로를 작성하면 렌더링 후 표시됩니다.
    ```md
    이미지 파일은 ![alt text](/assets/{folder_name}/{name.suffix})로 입력합니다.
    ```
- 이미지 속성은 `![alt text](path){: style="inline css syntax"}`를 통해 크기 조정이 가능합니다.
    ```md
    크기 조정 ![alt text](path){: style="width: 200px; height: 150px"}
    ```

### 5. 수식 입력
- (TBA)
