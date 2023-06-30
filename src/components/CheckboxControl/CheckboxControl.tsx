import React from "react";
import { IFieldProps } from "../../common/field";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

interface IProps extends IFieldProps {
    showValidation: () => JSX.Element;
}

function CheckboxControl(props: IProps) {
    const wrapperClassName = "meta-form-control-" + props.field.name;
    return (
        <FormGroup>
            {props.form.options &&
                props.form.options.map((option: { label: string; value: any }) => {
                    return (
                        <FormControlLabel
                            className={wrapperClassName}
                            key={option.value}
                            value={option.value}
                            control={
                                <Checkbox
                                    checked={option.value === props.form.value}
                                    onChange={(e) => {
                                        const checked = e.target.checked;
                                        props.handleChange(e, checked ? option.value : "");
                                        props.handleValidation();
                                    }}
                                    disabled={props.form.isDisabled}
                                />
                            }
                            label={option.label}
                        />
                    );
                })}
            {props.showValidation()}
        </FormGroup>
    );
}

export default CheckboxControl;
