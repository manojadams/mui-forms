import { IError, IField, IFormField, IOption, MetaForm } from "@manojadams/metaforms-core";
import { TMouseEvent, TValue } from "@manojadams/metaforms-core/dist/constants/types";

export interface IFieldProps {
    className: string;
    context: MetaForm;
    field: IField;
    form: IFormField;
    name: string;
    size: "small" | "medium";
    error: IError;
    variant?: string;
    customProps?: Record<string, boolean | string | number>;
    handleChange(e: TMouseEvent, val?: TValue, ref?: IOption): void;
    handleValidation: () => void;
    setError: (hasError: boolean, errorMsg: string) => void;
}
