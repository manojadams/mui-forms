import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: (
        <div className="logo-wrapper">
            <img className="mf-logo" src="/logos/logo.png" width="52" />
            <span>MUI Forms</span>
        </div>
    ),
    project: {
        link: "https://github.com/manojadams/mui-forms"
    },
    chat: {
        link: "https://discord.com/channels/1118549772446470215/1118549772446470217"
    },
    docsRepositoryBase: "https://github.com/manojadams/mui-forms/tree/docs/docs",
    footer: {
        text: "© Copyright 2023 MUI forms"
    },
    nextThemes: {
        defaultTheme: "light"
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="MuiForms" />
            <meta property="og:description" content="Create dynamic forms" />
        </>
    )
};

export default config;
