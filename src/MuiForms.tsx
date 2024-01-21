import CoreFormRenderer, { IFormRenderer, metaAPI } from "@manojadams/metaforms-core";
import React from "react";
import FormControl from "./forms/FormControl";
import FormGroup from "./forms/FormGroup";
import { FormStepper } from "./forms/FormStepper";
import { Button } from "@mui/material";
import FormWizard from "./forms/FormWizard";

/**
 * Dynamically render forms using `metaforms schema` and `mui components`
 */
class MuiForms extends React.Component<IFormRenderer> {
    render() {
        return (
            <CoreFormRenderer
                buttons={{
                    submit: <Button variant="contained">Submit</Button>,
                    next: <Button variant="contained">Next</Button>,
                    previous: <Button variant="text">Previous</Button>,
                    cancel: <Button variant="text">Cancel</Button>
                }}
                {...this.props}
                baseFormControl={FormControl}
                baseFormGroup={FormGroup}
                baseFormStepper={FormStepper}
                baseFormWizard={FormWizard}
            />
        );
    }
}

export { metaAPI };

export default MuiForms;
