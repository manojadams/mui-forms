import { IFormField } from "@manojadams/metaforms-core";
import { TValue } from "@manojadams/metaforms-core/dist/constants/types";

class MuiFormUtil {
    static getDisplayLabel(form: IFormField) {
        return form.validation?.required ? form.displayName + " *" : form.displayName;
    }

    /**
     * Get checkbox value - checkbox should contain only string values
     * @param value 
     * @returns 
     */
    static getCheckboxValue(value: Exclude<TValue, Date>) {
        if (value === null || value === undefined) {
            return value;
        }
        let checkboxValue = value;
        switch(typeof checkboxValue) {
            case "boolean":
                checkboxValue = checkboxValue.toString();
                break;
            case "number":
                checkboxValue = checkboxValue.toString();
                break;
        }
        return checkboxValue;
    }
}

export default MuiFormUtil;
