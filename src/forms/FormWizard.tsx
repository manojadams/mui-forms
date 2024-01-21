import React, { Fragment } from "react";
import { BaseFormWizard, FormFieldRenderer } from "@manojadams/metaforms-core";

class FormWizard extends BaseFormWizard {
    screens(): JSX.Element {
        const field = this.fields.find((_f, i) => i === this.state.activeIndex);
        const fn = () => false;
        const form = this.context.form[field?.name ? field.name : "default"];
        return (
            <Fragment>
                {field && (
                    <FormFieldRenderer {...field} key={field.name} section={field.name} sync={fn} form={form as any} />
                )}
            </Fragment>
        );
    }
}

export default FormWizard;
