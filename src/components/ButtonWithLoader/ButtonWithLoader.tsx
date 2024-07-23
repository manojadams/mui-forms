import { Button } from "@mui/material";
import React from "react";

interface Props {
    isLoading: boolean;
    isLoaderDisabled: boolean;
    loader: JSX.Element;
    size?: "medium" | "small" | "large";
    text: string;
}

function ButtonWithLoader(props: Props) {
    return (
        <Button variant="contained" size={props.size} sx={{ gap: "12px" }}>
            {props.isLoading && !props.isLoaderDisabled ? props.loader : props.text}
        </Button>
    );
}

export default ButtonWithLoader;
