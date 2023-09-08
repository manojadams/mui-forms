import React from "react";
import { IFieldProps } from "../../common/field";
import { FormUtils } from "@manojadams/metaforms-core";
import { Button, FormControl, FormLabel } from "@mui/material";
import MandatoryLabel from "../../common/MandatoryLabel";
import { Row } from "layout-emotions";

interface IProps extends IFieldProps {
    showValidation: () => JSX.Element;
}

function RadioButtonControl(props: IProps) {
    const isRow = props.form?.displayProps?.optionsLayout === "row" ? true : undefined;
    const wrapperClassName =
        props.className +
        (props.form?.displayProps?.fieldLayout === "row" ? "d-md-flex flex-md-row justify-content-md-between" : "");
    const fieldLabelClassname = wrapperClassName ? "field-label d-md-flex align-items-md-center" : "field-label";
    const config = props.form.config as Record<string, any>;
    const icons = config?.icons;
    const startIconName = icons ? FormUtils.getIconNameByPosition("start", icons) : "";
    const endIconName = icons ? FormUtils.getIconNameByPosition("end", icons) : "";
    const handleClick = (e: React.MouseEvent) => {
        let button = e.target as any;
        if (button && button.tagName !== "button") {
            button = button.closest("button");
        }
        const datatype =
            // eslint-disable-next-line dot-notation
            button && button["getAttribute"] ? button["getAttribute"]("datatype") : "";
        if (datatype) {
            switch (datatype) {
                case "boolean":
                    {
                        // eslint-disable-next-line dot-notation
                        const val = e.target["value"] === "true" ? true : false;
                        props.handleChange(e, val);
                    }
                    break;
                default: {
                    const val2 = button.value;
                    props.handleChange(e, val2);
                }
            }
        } else {
            props.handleChange(e);
        }
        props.handleValidation();
    };

    return (
        <FormControl size={props.size} fullWidth className={wrapperClassName}>
            <FormLabel className={fieldLabelClassname}>
                {props.form.displayName + " "}
                {props.form?.validation?.required && <MandatoryLabel />}
            </FormLabel>
            <Row onClick={handleClick}>
                {props.form.options &&
                    props.form.options.map((option) => {
                        const datatype = typeof option.value;
                        const className = option.value === props.form.value ? "selected" : "";
                        return (
                            <div className="mcol" key={option.value as string}>
                                <Button
                                    className={className}
                                    datatype={datatype}
                                    disabled={props.form.isDisabled}
                                    value={option.value as string}
                                    variant={option.value === props.form.value ? "contained" : "outlined"}
                                    size={props.size || "medium"}
                                    fullWidth
                                >
                                    {startIconName && startIconName === option.value
                                        ? props.context.getIcon(startIconName)
                                        : ""}
                                    {option.label}
                                    {endIconName && endIconName === option.value
                                        ? props.context.getIcon(endIconName)
                                        : ""}
                                </Button>
                            </div>
                        );
                    })}
            </Row>
            {props.showValidation()}
        </FormControl>
    );
}

export default RadioButtonControl;
