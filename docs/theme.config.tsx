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
        link: "https://github.com/manojadams/metaforms-mui"
    },
    chat: {
        link: "https://discord.com"
    },
    docsRepositoryBase: "https://github.com/manojadams/mui.metaform-docs",
    footer: {
        text: "© MUI forms"
    },
    nextThemes: {
        defaultTheme: "light"
    }
};

export default config;
