import React from "react";
import { JsonViewer, NamedColorspace } from "@textea/json-viewer";

interface IProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: Record<string, any>;
}

function SchemaViewer(props: IProps) {
    return <JsonViewer value={props.value} theme={ocean} groupArraysAfterLength={3} className="mjson-viewer" />;
}

export const ocean: NamedColorspace = {
    scheme: "Ocean",
    author: "Chris Kempson (http://chriskempson.com)",
    base00: "var(--md-theme-bg, rgba(0, 93, 199, 0.05))",
    base01: "#343d46",
    base02: "#4f5b66",
    base03: "#65737e",
    base04: "#a7adba",
    base05: "#c0c5ce",
    base06: "#dfe1e8",
    base07: "var(--md-theme-text, #eff1f5)",
    base08: "#bf616a",
    base09: "var(--md-theme-text-val, #d08770)",
    base0A: "#ebcb8b",
    base0B: "#a3be8c",
    base0C: "#96b5b4",
    base0D: "#8fa1b3",
    base0E: "#b48ead",
    base0F: "#ab7967"
};

// lab(47.8876% 63.025 42.31)

export default SchemaViewer;
