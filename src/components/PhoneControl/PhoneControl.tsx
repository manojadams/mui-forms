import { IValidation } from "@manojadams/metaforms-core";
import React, { Fragment } from "react";
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
                country={config?.country as string ?? "in"}
                value={props.form.value as string}
                onChange={(phone: string) => {
                    props.handleChange(null, phone);
                    props.validate(phone);
                }}
                onBlur={props.handleValidation}
                isValid={(value, country, countries, hiddenAreaCodes) => {
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
