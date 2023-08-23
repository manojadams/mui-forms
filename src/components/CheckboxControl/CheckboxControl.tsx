import React, { useEffect, useState } from "react";
import { IFieldProps } from "../../common/field";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

interface IProps extends IFieldProps {
    showValidation: () => JSX.Element;
}

function CheckboxControl(props: IProps) {
    const [values, setValues] = useState<string[]>([]);
    const isNotMultple = props.form.config?.multiple === false;
    useEffect(() => {
        const value = props.form.value as string ?? "";
        const values = value.split(",");
        // if multiple config not defined, then using multiple by default
        if (isNotMultple && values.length > 1) {
            // do not allow multiple values
            setValues([values[0]]);
        } else {
            setValues(values);
        }
    }, [props]);
    return (
        <FormGroup>
            {props.form.options &&
                props.form.options.map((option: { label: string; value: any }) => {
                    return (
                        <FormControlLabel
                            className={props.className}
                            key={option.value}
                            value={option.value}
                            control={
                                <Checkbox
                                    checked={values.indexOf(option.value) >= 0}
                                    onChange={(e) => {
                                        const checked = e.target.checked;
                                        if (!isNotMultple && props.form?.options && props.form?.options.length > 0) {
                                            const currentValue = option.value;
                                            let currentValues = [];
                                            if (checked) {
                                                currentValues = [...values, currentValue];
                                            } else {
                                                currentValues = values.filter(val => val !== option.value);
                                            }
                                            props.handleChange(e, currentValues.join(","));
                                        } else {
                                            props.handleChange(e, checked ? option.value : "");
                                        }
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
