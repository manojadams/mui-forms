import React from "react";
import { IFieldProps } from "../../common/field";
import { FormUtils } from "@manojadams/metaforms-core";
import { TextField, TextFieldVariants } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import enLocale from "date-fns/locale/en-US";
import MuiFormUtil from "../../Utils/MuiFormUtil";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function MonthControl(props: IFieldProps) {
    const dateString = props.form?.value ? props.form.value + "" : "";
    const value = props.form?.value ? new Date(dateString) : null;
    const label = MuiFormUtil.getDisplayLabel(props.form);
    const variant = props.variant;
    const max = props.form.validation?.max ? new Date(props.form.validation.max) : undefined;
    const min = props.form.validation?.min ? new Date(props.form.validation.min) : undefined;
    const inputFormat = "MMM yyyy";
    const placeholder = props.form.placeholder || inputFormat;
    let localValue;
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
            <DatePicker
                label={label}
                openTo="year"
                views={["year", "month"]}
                value={localValue || value}
                inputFormat={inputFormat}
                minDate={min}
                maxDate={max}
                PopperProps={{
                    className: "meta-form-date-picker"
                }}
                onChange={(val, inputString) => {
                    if (inputString) {
                        if (inputString.length >= 8) {
                            const dateValue = Date.parse(inputString);
                            if (!isNaN(dateValue)) {
                                const dateString = FormUtils.getDateString(new Date(dateValue));
                                props.handleChange(null, dateString);
                            } else {
                                localValue = inputString;
                            }
                        } else {
                            localValue = inputString;
                        }
                    } else {
                        if (val) {
                            const isNan = isNaN(val.getTime());
                            if (isNan) {
                                localValue = val;
                            } else {
                                localValue = undefined;
                                const dateString = FormUtils.getDateString(val);
                                props.handleChange(null, dateString);
                            }
                        } else {
                            props.handleChange(null, "");
                        }
                    }
                }}
                onClose={props.handleValidation}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        className={props.className}
                        variant={variant as TextFieldVariants}
                        helperText={props.error.errorMsg || undefined}
                        placeholder={props.form.placeholder}
                        inputProps={{
                            ...params.inputProps,
                            placeholder: placeholder
                        }}
                        onBlur={props.handleValidation}
                        size={props.size}
                        error={props.error?.hasError ? true : undefined}
                        fullWidth
                    />
                )}
            />
        </LocalizationProvider>
    );
}

export default MonthControl;
