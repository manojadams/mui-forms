import { IFormField } from "@manojadams/metaforms-core";

class MuiFormUtil {
    static getDisplayLabel(form: IFormField) {
        return form.validation?.required ? form.displayName + " *" : form.displayName;
    }
}

export default MuiFormUtil;
