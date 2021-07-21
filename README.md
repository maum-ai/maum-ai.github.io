<<<<<<< HEAD
# minima

*Minima is a one-size-fits-all Jekyll theme for writers*. It's Jekyll's default (and first) theme. It's what you get when you run `jekyll new`.

***Disclaimer:** The information here may vary depending on the version you're using. Please refer to the `README.md` bundled
within the theme-gem for information specific to your version or by pointing your browser to the Git tag corresponding to your
version. e.g. https://github.com/jekyll/minima/blob/v2.5.0/README.md*  
*Running `bundle show minima` will provide you with the local path to your current theme version.*


[Theme preview](https://jekyll.github.io/minima/)

![minima theme preview](/screenshot.png)

## Installation

Add this line to your Jekyll site's Gemfile:

```ruby
gem "minima"
```

And then execute:

    $ bundle


## Contents At-A-Glance

Minima has been scaffolded by the `jekyll new-theme` command and therefore has all the necessary files and directories to have a new Jekyll site up and running with zero-configuration.

### Layouts

Refers to files within the `_layouts` directory, that define the markup for your theme.

  - `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says ` {{ content }} ` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
  - `home.html` &mdash; The layout for your landing-page / home-page / index-page. [[More Info.](#home-layout)]
  - `page.html` &mdash; The layout for your documents that contain FrontMatter, but are not posts.
  - `post.html` &mdash; The layout for your posts.

#### Home Layout

`home.html` is a flexible HTML layout for the site's landing-page / home-page / index-page. <br/>

##### *Main Heading and Content-injection*

From Minima v2.2 onwards, the *home* layout will inject all content from your `index.md` / `index.html` **before** the **`Posts`** heading. This will allow you to include non-posts related content to be published on the landing page under a dedicated heading. *We recommended that you title this section with a Heading2 (`##`)*.

Usually the `site.title` itself would suffice as the implicit 'main-title' for a landing-page. But, if your landing-page would like a heading to be explicitly displayed, then simply define a `title` variable in the document's front matter and it will be rendered with an `<h1>` tag.

##### *Post Listing*

This section is optional from Minima v2.2 onwards.<br/>
It will be automatically included only when your site contains one or more valid posts or drafts (if the site is configured to `show_drafts`).

The title for this section is `Posts` by default and rendered with an `<h2>` tag. You can customize this heading by defining a `list_title` variable in the document's front matter.


### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.

  - `disqus_comments.html` &mdash; Code to markup disqus comment box.
  - `footer.html` &mdash; Defines the site's footer section.
  - `google-analytics.html` &mdash; Inserts Google Analytics module (active only in production environment).
  - `head.html` &mdash; Code-block that defines the `<head></head>` in *default* layout.
  - `custom-head.html` &mdash; Placeholder to allow users to add more metadata to `<head />`.
  - `header.html` &mdash; Defines the site's main header section. By default, pages with a defined `title` attribute will have links displayed here.
  - `social.html` &mdash; Renders social-media icons based on the `minima:social_links` data in the config file.


### Sass

Refers to `.scss` files within the `_sass` directory that define the theme's styles.

  - `minima/skins/classic.scss` &mdash; The "classic" skin of the theme. *Used by default.*
  - `minima/initialize.scss` &mdash; A component that defines the theme's *skin-agnostic* variable defaults and sass partials.
    It imports the following components (in the following order):
    - `minima/custom-variables.scss` &mdash; A hook that allows overriding variable defaults and mixins. (*Note: Cannot override styles*)
    - `minima/_base.scss` &mdash; Sass partial for resets and defines base styles for various HTML elements.
    - `minima/_layout.scss` &mdash; Sass partial that defines the visual style for various layouts.
    - `minima/custom-styles.scss` &mdash; A hook that allows overriding styles defined above. (*Note: Cannot override variables*)

Refer the [skins](#skins) section for more details.


### Assets

Refers to various asset files within the `assets` directory.

  - `assets/css/style.scss` &mdash; Imports sass files from within the `_sass` directory and gets processed into the theme's
    stylesheet: `assets/css/styles.css`.
  - `assets/minima-social-icons.svg` &mdash; A composite SVG file comprised of *symbols* related to various social-media icons.
    This file is used as-is without any processing. Refer [section on social networks](#social-networks) for its usage.


### Plugins

Minima comes with [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag) plugin preinstalled to make sure your website gets the most useful meta tags. See [usage](https://github.com/jekyll/jekyll-seo-tag#usage) to know how to set it up.


## Usage

Have the following line in your config file:

```yaml
theme: minima
```


### Customizing templates

To override the default structure and style of minima, simply create the concerned directory at the root of your site, copy the file you wish to customize to that directory, and then edit the file.
e.g., to override the [`_includes/head.html `](_includes/head.html) file to specify a custom style path, create an `_includes` directory, copy `_includes/head.html` from minima gem folder to `<yoursite>/_includes` and start editing that file.

The site's default CSS has now moved to a new place within the gem itself, [`assets/css/style.scss`](assets/css/style.scss).

In Minima 3.0, if you only need to customize the colors of the theme, refer to the subsequent section on skins. To have your
*CSS overrides* in sync with upstream changes released in future versions, you can collect all your overrides for the Sass
variables and mixins inside a sass file placed at `_sass/minima/custom-variables.scss` and all other overrides inside a sass file
placed at path `_sass/minima/custom.scss`.

You need not maintain entire partial(s) at the site's source just to override a few styles. However, your stylesheet's primary
source (`assets/css/style.scss`) should contain the following:

  - Front matter dashes at the very beginning (can be empty).
  - Directive to import a skin.
  - Directive to import the base styles (automatically loads overrides when available).

Therefore, your `assets/css/style.scss` should contain the following at minimum:

```sass
---
---

@import "minima/skins/{{ site.minima.skin | default: 'classic' }}";
@import "minima/initialize";
```

#### Skins

Minima 3.0 supports defining and switching between multiple color-palettes (or *skins*).

```
.
├── minima.scss
└── minima
    └── _syntax-highlighting.scss
```


A skin is a Sass file placed in the directory `_sass/minima/skins` and it defines the variable defaults related to the "color"
aspect of the theme. It also embeds the Sass rules related to syntax-highlighting since that is primarily related to color and
has to be adjusted in harmony with the current skin.

The default color palette for Minima is defined within `_sass/minima/skins/classic.scss`. To switch to another available skin,
simply declare it in the site's config file. For example, to activate `_sass/minima/skins/dark.scss` as the skin, the setting
would be:

```yaml
minima:
  skin: dark
```

As part of the migration to support skins, some existing Sass variables have been retired and some **have been redefined** as
summarized in the following table:

Minima 2.0      | Minima 3.0
--------------- | ----------
`$brand-color`  | `$link-base-color`
`$grey-*`       | `$brand-*`
`$orange-color` | *has been removed*

##### Available skins

- classic
- dark
- solarized
- solarized-dark

### Customize navigation links

This allows you to set which pages you want to appear in the navigation area and configure order of the links.

For instance, to only link to the `about` and the `portfolio` page, add the following to your `_config.yml`:

```yaml
header_pages:
  - about.md
  - portfolio.md
```


### Change default date format

You can change the default date format by specifying `site.minima.date_format`
in `_config.yml`.

```
# Minima date format
# refer to http://shopify.github.io/liquid/filters/date/ if you want to customize this
minima:
  date_format: "%b %-d, %Y"
```


### Extending the `<head />`

You can *add* custom metadata to the `<head />` of your layouts by creating a file `_includes/custom-head.html` in your source directory. For example, to add favicons:

1. Head over to [https://realfavicongenerator.net/](https://realfavicongenerator.net/) to add your own favicons.
2. [Customize](#customization) default `_includes/custom-head.html` in your source directory and insert the given code snippet.


### Enabling comments (via Disqus)

Optionally, if you have a Disqus account, you can tell Jekyll to use it to show a comments section below each post.

To enable it, add the following lines to your Jekyll site:

```yaml
  disqus:
    shortname: my_disqus_shortname
```

You can find out more about Disqus' shortnames [here](https://help.disqus.com/installation/whats-a-shortname).

Comments are enabled by default and will only appear in production, i.e., `JEKYLL_ENV=production`

If you don't want to display comments for a particular post you can disable them by adding `comments: false` to that post's YAML Front Matter.

:warning: `url`, e.g. `https://example.com`, must be set in you config file for Disqus to work.

### Author Metadata

From `Minima-3.0` onwards, `site.author` is expected to be a mapping of attributes instead of a simple scalar value:

```yaml
author:
  name: John Smith
  email: "john.smith@foobar.com"
```

To migrate existing metadata, update your config file and any reference to the object in your layouts and includes as summarized below:

Minima 2.x    | Minima 3.0
------------- | -------------------
`site.author` | `site.author.name`
`site.email`  | `site.author.email`


### Social networks

You can add links to the accounts you have on other sites, with respective icon, by adding one or more of the following options in your config.
From `Minima-3.0` onwards, the usernames are to be nested under `minima.social_links`, with the keys being simply the social-network's name:

```yaml
minima:
  social_links:
    twitter: jekyllrb
    github: jekyll
    stackoverflow: "11111"
    dribbble: jekyll
    facebook: jekyll
    flickr: jekyll
    instagram: jekyll
    linkedin: jekyll
    pinterest: jekyll
    telegram: jekyll
    microdotblog: jekyll
    keybase: jekyll

    mastodon:
     - username: jekyll
       instance: example.com
     - username: jekyll2
       instance: example.com

    gitlab:
     - username: jekyll
       instance: example.com
     - username: jekyll2
       instance: example.com

    youtube: jekyll
    youtube_channel: UC8CXR0-3I70i1tfPg1PAE1g
    youtube_channel_name: CloudCannon
```


### Enabling Google Analytics

To enable Google Analytics, add the following lines to your Jekyll site:

```yaml
  google_analytics: UA-NNNNNNNN-N
```

Google Analytics will only appear in production, i.e., `JEKYLL_ENV=production`

### Enabling Excerpts on the Home Page

To display post-excerpts on the Home Page, simply add the following to your `_config.yml`:

```yaml
show_excerpts: true
```


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jekyll/minima. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `script/bootstrap`.

To test your theme, run `script/server` (or `bundle exec jekyll serve`) and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme and the contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh.

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
=======
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
>>>>>>> master
