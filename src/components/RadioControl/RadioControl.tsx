import React from "react";
import { IFieldProps } from "../../common/field";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import MandatoryLabel from "../../common/MandatoryLabel";
import { TPosition } from "../../forms/ constants";

function RadioControl(props: IFieldProps) {
    const isRow = props.form?.displayProps?.optionsLayout === "row" ? true : undefined;
    const wrapperClassName =
        "meta-form-control-" +
        props.field.name +
        (props.form?.displayProps?.fieldLayout === "row" ? "d-md-flex flex-md-row justify-content-md-between" : "");
    const fieldLabelClassname = wrapperClassName ? "field-label d-md-flex align-items-md-center" : "field-label";
    const config = props.form?.config as Record<string, TPosition>;
    const labelPlacement: TPosition = config?.labelPlacement;
    return (
        <FormControl size={props.size} fullWidth className={wrapperClassName}>
            <FormLabel className={fieldLabelClassname}>
                {props.form.displayName}
                {props.form?.validation?.required && <MandatoryLabel />}
            </FormLabel>
            <RadioGroup
                row={isRow}
                value={props.form?.value}
                onChange={(e) => {
                    const parentLabel = e.target.closest("label");
                    const datatype = parentLabel ? parentLabel.getAttribute("datatype") : "";
                    if (datatype) {
                        switch (datatype) {
                            case "boolean":
                                {
                                    const val = e.target.value === "true";
                                    props.handleChange(e, val);
                                }
                                break;
                            default:
                                props.handleChange(e);
                        }
                    } else {
                        props.handleChange(e);
                    }
                }}
            >
                {props.form.options &&
                    props.form.options.map((option, idx) => {
                        const datatype = typeof option.value;
                        return (
                            <FormControlLabel
                                datatype={datatype}
                                labelPlacement={labelPlacement}
                                key={idx}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                            />
                        );
                    })}
            </RadioGroup>
        </FormControl>
    );
}

export default RadioControl;
