import React, { useEffect, useState } from "react";
import { IFieldProps } from "../../common/field";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import MuiFormUtil from "../../Utils/MuiFormUtil";

interface IProps extends IFieldProps {
    showValidation: () => JSX.Element;
}

const isChecked = (values: Array<string>, value: string | boolean) => {
    if (typeof value === "boolean") {
        const valueToString = String(value);
        return values.find((_value) => _value === valueToString) !== undefined;
    }
    return values.indexOf(value) >= 0;
};

function CheckboxControl(props: IProps) {
    const [values, setValues] = useState<string[]>([]);
    // by default, multiple config is true (checkbox allows multiple values to be selected)
    const isMultiple = props.form.config?.multiple ?? (props.form.options ?? []).length > 1;
    useEffect(() => {
        // convert to string, if not string
        const value = MuiFormUtil.getCheckboxValue(props.form.value);
        if (value) {
            const values = value.split(",");
            // if multiple config not defined, then using multiple by default
            if (!isMultiple && values.length > 1) {
                // do not allow multiple values
                setValues([values[0]]);
            } else {
                setValues(values);
            }
        } else {
            setValues([]);
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
                                    checked={isChecked(values, option.value)}
                                    onChange={(e) => {
                                        const checked = e.target.checked;
                                        if (isMultiple && props.form?.options && props.form?.options.length > 0) {
                                            const currentValue = MuiFormUtil.getCheckboxValue(option.value);
                                            let currentValues = [];
                                            if (checked) {
                                                currentValues = [...values, currentValue];
                                            } else {
                                                currentValues = values.filter((val) => val !== option.value);
                                            }
                                            props.handleChange(
                                                e,
                                                currentValues.length > 0 ? currentValues.join(",") : ""
                                            );
                                        } else {
                                            props.handleChange(
                                                e,
                                                checked ? MuiFormUtil.getCheckboxValue(option.value) : ""
                                            );
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
