import { IError, IField, IFormField, IOption, MetaForm } from "@manojadams/metaforms-core";
import { TMouseEvent, TValue } from "@manojadams/metaforms-core/dist/constants/types";

export interface IFieldProps {
    className: string;
    context: MetaForm;
    field: IField;
    form: IFormField;
    size: "small" | "medium";
    variant?: string;
    error: IError;
    handleChange(e: TMouseEvent, val?: TValue, ref?: IOption): void;
    handleValidation: () => void;
    setError: (hasError: boolean, errorMsg: string) => void;
}
