import React, { Suspense } from "react";
import { MuiTelInput } from "mui-tel-input";
import { IFieldProps } from "../../common/field";
import { TVariant } from "../../forms/ constants";
import MuiFormUtil from "../../Utils/MuiFormUtil";

interface IProps extends IFieldProps {
    className: string;
    handleChange: (...params: any) => void;
    validate: (phone: string) => void;
}

function PhoneControl(props: IProps) {
    const displayLabel = MuiFormUtil.getDisplayLabel(props.form);
    return (
        <Suspense>
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
        </Suspense>
    );
}

export default PhoneControl;
