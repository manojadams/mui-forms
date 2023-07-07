import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CalendarPickerView } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import enLocale from "date-fns/locale/en-US";
import { IFieldProps } from "../../common/field";
import { FormUtils, MSGS } from "@manojadams/metaforms-core";
import { TextField, TextFieldVariants } from "@mui/material";
import MuiFormUtil from "../../Utils/MuiFormUtil";
import { DEFAULT_DATE_FORMAT } from "../../forms/ constants";

interface IProps extends IFieldProps {
    section: string;
}

function DateControl(props: IProps) {
    const label = MuiFormUtil.getDisplayLabel(props.form);
    const dateString = props.form?.value ? props.form.value + "" : "";
    const value = props.form?.value ? new Date(dateString) : null;
    const variant = props.variant;
    const min = props.form.validation?.min ? new Date(props.form.validation.min) : undefined;
    const max = props.form.validation?.max ? new Date(props.form.validation.max) : undefined;
    const openTo: CalendarPickerView = (props.form?.config?.openTo as CalendarPickerView | undefined) ?? "day";
    const inputFormat = (props.form?.config?.inputFormat ?? DEFAULT_DATE_FORMAT) as string;
    const views: [CalendarPickerView] = (props.form?.config?.views as [CalendarPickerView] | undefined) ?? ["day"];
    const subProps = props || {};
    let localValue;
    const placeholder = props.form.placeholder ?? inputFormat;
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
            <DatePicker
                {...subProps}
                closeOnSelect
                disabled={props.form.isDisabled}
                readOnly={props.form.isReadonly}
                label={label}
                value={localValue ?? value}
                views={views}
                openTo={openTo}
                inputFormat={inputFormat}
                minDate={min}
                maxDate={max}
                DialogProps={{
                    className: "meta-form-date-picker"
                }}
                PopperProps={{
                    className: "meta-form-date-picker"
                }}
                onChange={(val: Date | null, inputString: string) => {
                    if (val === null && inputString === undefined) {
                        // input field is cleared
                        props.handleChange(null, "");
                    } else if (inputString === undefined) {
                        // popup is used
                        if (val) {
                            props.handleChange(null, FormUtils.getDateString(val));
                        } else {
                            props.handleChange(null, "");
                        }
                    } else {
                        // input field is used
                        // check input format
                        if (val && inputString && inputString.length === inputFormat.length) {
                            const formattedInpputSting = FormUtils.getLocalDateStringFormat(inputString, inputFormat);
                            const inputDate = Date.parse(formattedInpputSting);
                            if (isNaN(inputDate)) {
                                props.setError(true, MSGS.ERROR_MSG.DATE_INVALID);
                            } else {
                                props.handleChange(null, FormUtils.getDateString(new Date(inputDate)));
                            }
                        } else {
                            localValue = val;
                        }
                    }
                }}
                // eslint-disable-next-line react/jsx-no-bind
                onClose={() => {
                    props.handleValidation();
                    props.context.emit("$field_close", {
                        payload: {
                            section: props.section,
                            field: props.field.name,
                            value
                        }
                    });
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant={variant as TextFieldVariants}
                        className={props.className}
                        helperText={props.error.errorMsg || undefined}
                        inputProps={{
                            ...params.inputProps,
                            placeholder
                        }}
                        // eslint-disable-next-line react/jsx-no-bind
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

export default DateControl;
