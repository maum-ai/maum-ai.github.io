import React from 'react';
import styles from '@site/src/pages/publications.module.css';

const { v4: uuidv4 } = require('uuid');

export function ConferenceItem({conference}) {
    return (
        <div className={styles.conference}>{conference}</div>
    );
}

export function PaperTitle({paperLink, title}) {
    if (paperLink) {
        return (
            <h3>
                <a href={paperLink} target="_blank" rel="noopener noreferrer">{title}</a>
            </h3>
        );
    }
    return (
        <h3>
            <a>{title}</a>
        </h3>
    );
    
}

export function AuthorItem(props) {
    let authorParagraph = (
    <p className={styles.authors}>
        {props.authors.map((author, i) => {
            let isFinal = (i == props.authors.length - 1 && props.authors.length > 1) ? "and " : ""
            if (i < props.numFirstAuthor){
                if (props.isBrainTeam[i]){
                    return (
                        <>{isFinal}<b>{author}<sup>*</sup></b></>
                    );
                }
                return (
                    <>{isFinal}{author}<sup>*</sup></>
                );
            }
            if (props.isBrainTeam[i]){
                return (
                    <>{isFinal}<b>{author}</b></>
                );
            }
            return (
                <>{isFinal}{author}</>
            );
        }).reduce((prev, curr) => props.authors.length > 2 ? [prev, ', ', curr] : [prev, " ", curr])}
    </p>
    );
    
    
    return authorParagraph;
}

export function PaperDescription({preview, description}) {
    const randomId = uuidv4();
    return (
        <div>
            <input type="checkbox" className={styles.expanded} id={randomId} />
            <p className={styles.description}>
                {preview}
                <span className={styles.full}>
                    {description}
                </span>
            </p>
            <label for={randomId} className={styles.trigger}></label>
        </div>
    );

}

export function GithubItem({link, customName="Github"}) {
    return (
        <p className={styles.github}>
            <a href={link} target="_blank" rel="noopener noreferrer">{customName}</a>
        </p>
    );
}

export function DemoItem({link, customName="Demo"}) {
    return (
        <p className={styles.demo}>
            <a href={link} target="_blank" rel="noopener noreferrer">{customName}</a>
        </p>
    );
}

export function MiscItem({link, customName="Misc"}) {
    return (
        <p className={styles.misc}>
            <a href={link} target="_blank" rel="noopener noreferrer">{customName}</a>
        </p>
    );
}

export function LeaderboardItem({link, customName="Leaderboard"}) {
    return (
        <p className={styles.leaderboard}>
            <a href={link} target="_blank" rel="noopener noreferrer">{customName}</a>
        </p>
    );
}



export default {
    ConferenceItem: ConferenceItem,
    PaperTitle: PaperTitle,
    AuthorItem: AuthorItem,
    PaperDescription: PaperDescription,
    GithubItem: GithubItem,
    DemoItem: DemoItem,
    MiscItem: MiscItem,
    LeaderboardItem: LeaderboardItem,
}