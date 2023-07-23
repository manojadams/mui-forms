import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
    logo: (
        <div className="logo-wrapper">
            {/* <img className="mf-logo" src="/logos/logo.png" width="52" /> */}
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
    darkMode: false,
    head: () => {
        const { frontMatter } = useConfig();
        const { asPath, defaultLocale, locale } = useRouter();
        // const url = "https://my-app.com" + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
        return (
            <>
                {/* <meta property="og:url" content={url} /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content={"abc" + frontMatter.title || "MuiForms"} />
                <meta property="title" content={"bcd" + frontMatter.title || "MuiForms"} />
                <meta property="og:description" content="Create dynamic forms" />
            </>
        );
    }
};

export default config;
