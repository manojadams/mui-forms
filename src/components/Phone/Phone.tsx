import { IValidation } from "@manojadams/metaforms-core";
import React, { Fragment } from "react";
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
    // const displayLabel = MuiFormUtil.getDisplayLabel(props.form);
    return <Fragment />;
}

export default Phone;
