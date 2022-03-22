import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className={styles.pageContents}>

          <br />

          <h1 class="anchor anchorWithStickyNavbar_mojV" id="brain-blog">
            Hello Community!
            <a class="hash-link" href="#hello-community"
              title="Direct link to heading"></a>
          </h1>
          <br />

          <p>
            안녕하세요 <strong>MINDsLab Brain</strong>입니다. Brain팀은 <a href="https://maum.ai" target="_blank" rel="noopener noreferrer"><strong>MINDsLab</strong></a>의 연구조직으로, 회사에서 서비스하(려)는 ML/DL 알고리즘을 연구 및 개발하고 있습니다.
          </p>

          <p>
            Brain팀에서는 수학, 컴퓨터공학, 물리, 뇌공학 등 다양한 배경을 가진 연구원들이 모여 Audio, NLP, Vision 분야를 누비며 연구를 진행 중입니다. 연구원들 분들 중에는 DL/ML 분야 연구실에서 석사 과정을 졸업하신 분부터 국제 수학 올림피아드 국가대표를 하실 정도로 수학을 잘하시는 분, 전공과는 무관하게 DL/ML에 대한 열정으로 스터디를 하시는 분 등 다양하면서도 포텐셜 넘치시는 분들이 함께 시너지를 만들고 있습니다 😉
          </p>

          <p>
            그리고 이 시너지를 바탕으로 서비스에 대한 연구를 진행함은 물론, Interspeech, ECCV, NeurIPS, CVPR 등의 학회 및 Workshop에서 논문 발표 및 Challenge 수상을 하고 있습니다!
          </p>

          <br />


          <h3 class="anchor anchorWithStickyNavbar_mojV" id="brain-blog">
            Brain Blog?
            <a class="hash-link" href="#brain-blog" title="Direct link to heading">​</a>
          </h3>

          <p>
            Brain팀의 연구는 AI research community의 많은 글과 오픈소스로부터 도움을 받아 이뤄지고, 또한 <a href="https://mindslab-ai.github.io" target="_blank" rel="noopener noreferrer">논문과 코드 공개를 통해 기여</a>하고 있습니다. 사실 논문과 코드라는 결실은 Brain팀에서의 수많은 토의와 아이디어들을 기반으로 맺게 되는데요. Brain팀에서 진행하는 DL/ML에 대한 이야기들 중 가치 있는 이야기들을 모아 이 블로그에서 공유하려고 합니다. 물론, 논문과 코드 공개 소식도 이 블로그에서 제일 먼저 공유할 예정입니다!
          </p>
          <br />


          <h3 class="anchor anchorWithStickyNavbar_mojV" id="in-this-blog">
            In This Blog
            <a class="hash-link" href="#in-this-blog" title="Direct link to heading">​</a>
          </h3>

          <p>
            위에서도 잠깐 말씀드렸지만, MINDsLab Brain팀 블로그에서는 아래와 같은 내용들을 공유하려고 합니다.
          </p>

          <ul>
            <li>
              AI 연구 이야기, 그리고 그 과정에서 우리가 발견한 것들
            </li>
            <li>
              논문 및 학회 참석에 대한 리뷰
            </li>
            <li>
              Research in the wild
            </li>
            <li>
              그리고 DL/ML에 대한 잡담...!
            </li>
          </ul>
          <br />


          <h3 class="anchor anchorWithStickyNavbar_mojV" id="brain팀은-오늘도-순항-중">
            Brain팀은 오늘도 순항 중!
            <a class="hash-link" href="#brain팀은-오늘도-순항-중" title="Direct link to heading">​</a>
          </h3>

          <p>
            오늘도 Brain팀 연구원분들은 여러 연구와 Code-work을 진행하고 있습니다.
            Brain팀 블로그로 놀러 오셔서 함께 이야기해요! 반갑습니다 👍
          </p>

        </div>
      </div>
    </section>
  );
}


