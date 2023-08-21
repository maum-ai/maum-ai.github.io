// Snippet from https://utteranc.es/?installation_id=24371377&setup_action=install

import React, { useEffect, useRef } from "react";
import OriginalBlogPostItem from "@theme-original/BlogPostItem";
import { useColorMode } from "@docusaurus/theme-common";

const utterancesSelector = "iframe.utterances-frame";

function BlogPostItem(props) {
    const { isDarkTheme } = useColorMode();
    const utterancesTheme = isDarkTheme ? "github-dark" : "github-light";
    const containerRef = useRef(null);

    useEffect(() => {
        if (!props.isBlogPostPage) return;

        const utterancesEl = containerRef.current.querySelector(utterancesSelector);

        const createUtterancesEl = () => {
            const script = document.createElement("script");

            script.src = "https://utteranc.es/client.js";
            script.setAttribute("repo", "maum-ai/maum-ai.github.io");
            script.setAttribute("issue-term", "pathname");
            script.setAttribute("label", "comments💬");
            script.setAttribute("theme", utterancesTheme);
            script.crossOrigin = "anonymous";
            script.async = true;

            containerRef.current.appendChild(script);
        };

        const postThemeMessage = () => {
            const message = {
                type: "set-theme",
                theme: utterancesTheme,
            };

            utterancesEl.contentWindow.postMessage(message, "https://utteranc.es");
        };

        utterancesEl ? postThemeMessage() : createUtterancesEl();
    }, [utterancesTheme]);

    return (
        <>
            <OriginalBlogPostItem {...props} />
            {props.isBlogPostPage && <div ref={containerRef} />}
        </>
    );
}

export default BlogPostItem;