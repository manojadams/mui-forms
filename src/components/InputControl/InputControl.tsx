import {
    FilledInputProps,
    OutlinedInputProps,
    InputProps as MuiInputProps,
    TextField,
    TextFieldVariants
} from "@mui/material";
import React from "react";
import { IFieldProps } from "../../common/field";
import MuiFormUtil from "../../Utils/MuiFormUtil";

interface InputProps extends IFieldProps {
    type: string;
    InputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<MuiInputProps>;
}
function InputControl(props: InputProps) {
    const label = MuiFormUtil.getDisplayLabel(props.form);
    let infoText: any = props.form?.validation?.infoDetail?.infoMsg;
    const wrapperClassName = "meta-form-control-" + props.field.name;
    const extraProps = props || {};
    const isInfoFnExists = infoText?.includes("$");
    if (isInfoFnExists) {
        const infoMsgFnName: string = props.form?.validation?.infoDetail?.infoMsgFn ?? "";
        const infoMsgFn = props.context.getFn(infoMsgFnName);
        infoText = infoMsgFn ? infoMsgFn(null, undefined, props.form) : null;
    }
    return (
        <TextField
            className={wrapperClassName}
            type={props.type}
            label={label}
            variant={props.variant as TextFieldVariants}
            fullWidth
            disabled={props.form.isDisabled}
            inputProps={{
                readOnly: props.form.isReadonly,
                ...extraProps
            }}
            InputProps={props.InputProps}
            placeholder={props.form?.placeholder}
            value={props.form?.value}
            error={props.error?.hasError ? true : undefined}
            helperText={props.error.errorMsg || infoText || undefined}
            onChange={props.handleChange}
            onBlur={props.handleValidation}
            size={props.size}
        />
    );
}

export default InputControl;
