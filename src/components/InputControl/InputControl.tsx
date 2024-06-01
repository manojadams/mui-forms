import { TextField, TextFieldVariants, TextFieldProps, InputBaseProps } from "@mui/material";
import React from "react";
import { IFieldProps } from "../../common/field";
import MuiFormUtil from "../../Utils/MuiFormUtil";

interface InputControlProps extends IFieldProps {
    type: string;
    htmlProps?: InputBaseProps["inputProps"];
    textFieldProps?: TextFieldProps;
}
function InputControl(props: InputControlProps) {
    const label = MuiFormUtil.getDisplayLabel(props.form);
    let infoText: string = props.form?.validation?.infoDetail?.infoMsg ?? "";
    const htmlProps = props.htmlProps ?? {};
    const textFieldProps = props.textFieldProps ?? {};
    const isInfoFnExists = infoText?.includes("$");
    if (isInfoFnExists) {
        const infoMsgFnName: string = props.form?.validation?.infoDetail?.infoMsgFn ?? "";
        const infoMsgFn = props.context.getFn(infoMsgFnName);
        infoText = infoMsgFn ? (infoMsgFn(null, undefined, props.form) as string) : "";
    }
    return (
        <TextField
            className={props.className ?? ""}
            type={props.type}
            label={label}
            name={props.name}
            variant={props.variant as TextFieldVariants}
            fullWidth
            disabled={props.form.isDisabled}
            inputProps={{
                readOnly: props.form.isReadonly,
                ...htmlProps
            }}
            InputProps={props.textFieldProps?.InputProps}
            placeholder={props.form?.placeholder}
            value={props.form?.value}
            error={props.error?.hasError ? true : undefined}
            helperText={props.error.errorMsg || infoText || undefined}
            onChange={props.handleChange}
            onBlur={props.handleValidation}
            size={props.size}
            {...textFieldProps}
        />
    );
}

export default InputControl;
