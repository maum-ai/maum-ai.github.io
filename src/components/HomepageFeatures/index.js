import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const recentPublications = [
  {
    venue: 'EMNLP Findings',
    title: 'Do Spoken Language Models Hear Speech as They Read Text? Bridging Structural Gaps Between Speech and Text',
    authors: 'Hyeonyu Kim, Hwayeon Kim, Youngwon Choi, Myeongkyun Cho, Huu-Kim Nguyen',
    href: 'https://arxiv.org/abs/2608.22908',
  },
  {
    venue: 'INTERSPEECH · Oral',
    title: 'ZeSTA: Zero-Shot TTS Augmentation with Domain-Conditioned Training for Data-Efficient Personalized Speech Synthesis',
    authors: 'Youngwon Choi, Jinwoo Oh, Hwayeon Kim, Hyeonyu Kim',
    href: 'https://arxiv.org/abs/2603.04219',
  },
  {
    venue: 'ICASSP · Oral',
    title: 'Exploring Fine-Tuning of Large Audio Language Models for Spoken Language Understanding under Limited Speech Data',
    authors: 'Youngwon Choi, Jaeyoon Jung, Hyeonyu Kim, Huu-Kim Nguyen, Hwayeon Kim',
    href: 'https://arxiv.org/abs/2509.15389',
  },
];

const focusAreas = [
  {
    label: '01',
    title: 'Physical AI & Robotics',
    description: 'VLM/VLA 기반의 perception–reasoning–action 파이프라인을 연구하고, 로봇 시스템을 담당하는 팀과 협업해 연구 모델을 실제 로봇에 연결하는 역량을 강화하고 있습니다.',
  },
  {
    label: '02',
    title: 'Agentic AI for Industry',
    description: 'Language Model 기반 Agentic Workflow / Knowledge System을 연구하고 실제 산업 프로젝트에서 동작과 성능을 검증합니다.',
  },
  {
    label: '03',
    title: 'Audio Intelligence',
    description: 'STT, TTS, 음성 전처리와 Audio LLM을 연구합니다. 고객 서비스와 로봇 시스템에 연결하고, 온디바이스·온프레미스 환경에 배포합니다.',
  },
  {
    label: '04',
    title: 'Defense & Edge AI',
    description: '제한된 연산·통신 환경에서 동작하는 온디바이스·엣지 자율지능을 연구합니다. 국방 분야 적용을 중심으로 SONAR와 같은 센서 신호를 이해하는 AI도 다룹니다.',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.pageContents}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>What we do</span>
            <h1 id="brain-team">실제 환경의 인공지능 개발</h1>
            <p>
              <a href="https://maum.ai" target="_blank" rel="noopener noreferrer"><strong>maum.ai</strong></a>는 Physical AI와 산업, 국방을 핵심 축으로 온디바이스 AI와 자율지능 기술의 현장 적용을 추진하고 있습니다.
            </p>
            <p>
              Brain팀은 그 안에서 Embodied AI, Agentic LLM, Audio Intelligence, Robotics, Physical World Modeling을 연구합니다. 로봇의 인지·행동부터 산업 현장의 음성·언어 인터랙션, 국방 분야의 센서 신호까지, 프로젝트에서 발견한 요구사항을 연구 질문으로 발전시키고 검증된 결과를 다시 시스템 개선으로 연결합니다.
            </p>
          </div>

          <div className={styles.focusGrid}>
            {focusAreas.map((area) => (
              <article className={styles.focusCard} key={area.title}>
                <span className={styles.focusNumber}>{area.label}</span>
                <h2>{area.title}</h2>
                <p>{area.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>Research highlights</span>
              <h2>Recent Publications</h2>
            </div>
            <Link className={styles.viewAll} to="/publications">
              전체 논문 보기 →
            </Link>
          </div>

          <div className={styles.publicationGrid}>
            {recentPublications.map((publication) => (
              <a
                className={styles.publicationCard}
                href={publication.href}
                key={publication.title}
                target="_blank"
                rel="noopener noreferrer">
                <span className={styles.venue}>{publication.venue}</span>
                <h3>{publication.title}</h3>
                <p>{publication.authors}</p>
                <span className={styles.paperLink}>논문 보기 ↗</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
