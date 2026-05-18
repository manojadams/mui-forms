import { IFormRenderer } from "@manojadams/metaforms-core";

export type MuiColor = "error" | "inherit" | "primary" | "secondary" | "info" | "success" | "warning";

export type IMuiFormProps =
    | "buttons"
    | "className"
    | "changeResponseMode"
    | "components"
    | "config"
    | "controls"
    | "data"
    | "fns"
    | "footer"
    | "icons"
    | "lastPageNumber"
    | "loader"
    | "name"
    | "nextResponseMode"
    | "pageNumber"
    | "rest"
    | "schema"
    | "sectionLayout"
    | "validators"
    | "fieldMapper"
    | "onChange"
    | "onError"
    | "onPrevious"
    | "onNext"
    | "onSubmit"
    | "onSubmitError"
    | "onPopupClose";

export type IMuiFormRendererProps = Pick<IFormRenderer, IMuiFormProps>;
