import React from "react";
import { NumericFormat } from "react-number-format";

const NumberFormatter = (props: any, ref: any) => {
    const { onChange, ...otherProps } = props;
    return (
        <NumericFormat
            {...otherProps}
            getInputRef={ref}
            thousandSeparator
            type="text"
            valueIsNumericString
            prefix="₹ "
            thousandsGroupStyle="lakh"
            onValueChange={(values: any) => {
                onChange({ target: { name: props.name, value: values.value } });
            }}
        />
    );
};

export default React.forwardRef(NumberFormatter);
