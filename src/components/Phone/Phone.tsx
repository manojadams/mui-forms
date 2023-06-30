import { IValidation } from "@manojadams/metaforms-core";
import React from "react";
import PhoneInput from "react-phone-input-2";

interface IProps {
    className?: string;
    value?: string;
    handleChange: (...params: any) => void;
    validate: (phone: string) => void;
    validation?: IValidation;
}

function Phone(props: IProps) {
    return (
        <PhoneInput
            containerClass={props.className}
            country="in"
            value={props.value}
            onChange={(phone: string) => {
                props.handleChange(null, phone);
                props.validate(phone);
            }}
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
    );
}

export default Phone;
