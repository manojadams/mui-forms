import { IValidation } from "@manojadams/metaforms-core";
import React from "react";
import { IFieldProps } from "../../common/field";
import PhoneInput from "react-phone-input-2";
import * as S from "./styles";

interface IProps extends IFieldProps {
    className: string;
    handleChange: (...params: any) => void;
    validate: (phone: string) => void;
    validation?: IValidation;
}

function PhoneControl(props: IProps) {
    const config = props.form.config as Record<string, string>;
    return (
        <S.Phone>
            <PhoneInput
                inputProps={{
                    name: props.name
                }}
                specialLabel={props.form.displayName ?? ""}
                placeholder={props.form.placeholder ?? ""}
                country={(config?.country as string) ?? "in"}
                value={props.form.value as string}
                onChange={(phone: string) => {
                    props.handleChange(null, phone);
                    props.validate(phone);
                }}
                onBlur={props.handleValidation}
                isValid={(value) => {
                    let isValid = false;
                    if (value) {
                        isValid = value.length === 12;
                    } else {
                        if (props.validation?.required) {
                            isValid = false;
                        }
                    }
                    return isValid;
                }}
            />
        </S.Phone>
    );
}

export default PhoneControl;
