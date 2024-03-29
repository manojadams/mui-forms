import React, { Fragment } from "react";
import { IFieldProps } from "../../common/field";

interface IProps extends IFieldProps {
    showValidation: () => JSX.Element;
}

function CustomControl(props: IProps) {
    const template = props.form?.config?.template as string;
    const control = props.context.getControlElements(template);
    let customComponent: JSX.Element | null = null;
    if (control) {
        const element = control({
            field: props.form,
            form: props.context.form
        });
        if (React.isValidElement(element)) {
            customComponent = React.cloneElement(element);
        }
    }
    if (customComponent) {
        return (
            <div className={props.className}>
                {customComponent}
                {props.showValidation()}
            </div>
        );
    } else {
        return <Fragment />;
    }
}

export default CustomControl;
