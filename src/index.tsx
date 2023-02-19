import CoreFormRenderer from "@manojadams/metaforms-core";
import { IFormRenderer } from "@manojadams/metaforms-core";
import React from "react";
import FormControl from "./forms/FormControl";
import FormGroup from "./forms/FormGroup";
import { FormStepper } from "./forms/FormStepper";
class FormRenderer extends React.Component<IFormRenderer> {

  constructor(props: IFormRenderer) {
    super(props);
  }

  render() {
    return (
      <CoreFormRenderer 
        {...this.props} 
        baseFormControl={FormControl}
        baseFormGroup={FormGroup}
        baseFormStepper={FormStepper}
      />
    )
  }
}

export default FormRenderer;