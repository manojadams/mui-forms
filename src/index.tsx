import CoreFormRenderer, { IFormRenderer } from "@manojadams/metaforms-core";
import React from "react";
import FormControl from "./forms/FormControl";
import FormGroup from "./forms/FormGroup";
import { FormStepper } from "./forms/FormStepper";

/**
 * Dynamically render forms using `metaforms schema` and `mui components`
 */
class FormRenderer extends React.Component<IFormRenderer> {
    render() {
        return (
            <CoreFormRenderer
                {...this.props}
                baseFormControl={FormControl}
                baseFormGroup={FormGroup}
                baseFormStepper={FormStepper}
            />
        );
    }
}

export default FormRenderer;
