import React, { Fragment } from "react";
import { FormLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { IFieldProps } from "../../common/field";

function Label(props: IFieldProps) {
    const context = props.context;
    const meta = props.form;
    const wrapperClassName = props.className;
    let hasStartIcon = false;
    let hasEndIcon = false;
    let startIcon = <Fragment />;
    let endIcon = <Fragment />;
    const config = props.form.config as Record<string, any>;
    if (config?.icons) {
        const allIcons = Object.keys(config.icons);
        allIcons &&
            allIcons.forEach((icon) => {
                const actualIcon = config.icons && config.icons[icon] ? config.icons[icon] : undefined;
                if (actualIcon?.type === "start") {
                    hasStartIcon = true;
                    startIcon = context.getIcon(actualIcon.type) || <Fragment />;
                }
                if ((hasEndIcon = actualIcon?.type === "end")) {
                    hasEndIcon = true;
                    endIcon = context.getIcon(icon) || <Fragment />;
                }
            });
    }
    return (
        <FormControl size={props.size} fullWidth className={wrapperClassName}>
            <FormLabel className="field-label">{meta.displayName}</FormLabel>
            <span className="field-value">
                {hasStartIcon && startIcon}
                {meta.value}
                {hasEndIcon && endIcon}
            </span>
        </FormControl>
    );
}

export default Label;
