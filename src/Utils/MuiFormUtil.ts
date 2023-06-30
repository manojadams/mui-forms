import { IMeta } from "@manojadams/metaforms-core";

class MuiFormUtil {
    static getDisplayLabel(form: IMeta) {
        return form.validation?.required ? form.displayName + " *" : form.displayName;
    }
}

export default MuiFormUtil;
