import React from "react";
import { BaseFormWizard, FormFieldRenderer, IFormField } from "@manojadams/metaforms-core";
import { Row } from "layout-emotions";

class FormWizard extends BaseFormWizard {
    screens(): JSX.Element {
        const field = this.fields.find((_f, i) => i === this.state.activeIndex);
        const fn = () => false;
        const form = this.context.form[field?.name ? field.name : "default"] as IFormField;
        return (
            <Row>
                {field && <FormFieldRenderer {...field} key={field.name} section={field.name} sync={fn} form={form} />}
            </Row>
        );
    }
}

export default FormWizard;
