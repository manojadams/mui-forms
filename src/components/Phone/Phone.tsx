import { IValidation } from "@manojadams/metaforms-core";
import React from "react";
import { MuiTelInput } from "mui-tel-input";
import { IFieldProps } from "../../common/field";
import { TVariant } from "../../forms/ constants";
import MuiFormUtil from "../../Utils/MuiFormUtil";

interface IProps extends IFieldProps {
    className: string;
    handleChange: (...params: any) => void;
    validate: (phone: string) => void;
    validation?: IValidation;
}

function Phone(props: IProps) {
    const displayLabel = MuiFormUtil.getDisplayLabel(props.form);
    return (
        <MuiTelInput
            className={props.className}
            label={displayLabel}
            defaultCountry="IN"
            fullWidth
            placeholder={props.form.placeholder || displayLabel}
            value={props.form.value as string}
            variant={props.variant as TVariant}
            size={props.size}
            onChange={(phone: string) => {
                props.handleChange(null, phone);
                props.validate(phone);
            }}
        />
    );
}

export default Phone;
