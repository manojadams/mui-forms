import { Icon } from "@mui/material";
import React from "react";

interface IconConfig {
    name: string;
    position: string;
}

interface Props {
    name?: string;
    config?: IconConfig;
}

function MuiFormIcon(props: Props) {
    const name = props?.name ?? props.config?.name ?? "";
    return <Icon>{name}</Icon>;
}

export default MuiFormIcon;
