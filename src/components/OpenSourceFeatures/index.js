import React from 'react';
import styles from '@site/src/pages/open-source.module.css';

export function StarItem({userName="mindslab-ai", repoName=""}) {
    return (
        <div className={styles.stars}>
            <iframe src={`https://ghbtns.com/github-btn.html?user=${userName}&repo=${repoName}&type=star&count=true`} frameborder="0" scrolling="0" width="90" height="20" title="GitHub"></iframe>
        </div>
    );
}

export function GithubLinkItem({userName="mindslab-ai", repoName="", repoNickname=""}) {
    return (
        <h3><a href={`https://github.com/${userName}/${repoName}`} target="_blank" rel="noopener noreferrer">{repoNickname}</a></h3>
    );
}

export function PaperLinkItem({paperLink, title}) {
    return (
        <p className={styles.paper}>
            <a href={paperLink} target="_blank" rel="noopener noreferrer">{title}</a>
        </p>
    );
}

export default {
    StarItem: StarItem,
    GithubLinkItem: GithubLinkItem,
    PaperLinkItem: PaperLinkItem,
}