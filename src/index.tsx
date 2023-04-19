import CoreFormRenderer, { IFormRenderer } from "@manojadams/metaforms-core";
import React from "react";
import FormControl from "./forms/FormControl";
import FormGroup from "./forms/FormGroup";
import { FormStepper } from "./forms/FormStepper";
import { Button } from "@mui/material"

/**
 * Dynamically render forms using `metaforms schema` and `mui components`
 */
class FormRenderer extends React.Component<IFormRenderer> {
    render() {
        return (
            <CoreFormRenderer
                buttons={{
                    submit: <Button variant="contained">Submit</Button>,
                    next: <Button variant="contained">Next</Button>,
                    cancel: <Button variant="text">Cancel</Button>
                }}
                {...this.props}
                baseFormControl={FormControl}
                baseFormGroup={FormGroup}
                baseFormStepper={FormStepper}
            />
        );
    }
}

export default FormRenderer;
