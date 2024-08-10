## Typescript schema

```typescript
interface IUISchema {
    schema: ISchema;
}

interface ISchema {
    rest?: IRest;
    fields: Array<IField>;
    buttons?: Array<IField>;
}

interface IRest {
    config: IConfig;
}

interface IConfig {
    apihost?: string;
    basepath?: string;
    protocol?: string;
    headers?: Array<IConfigParam>;
}

interface IConfigParam {
    key: string;
    value: string;
}

interface IField {
    name: string;
    prop?: string;
    meta: IMeta;
    fields?: Array<IField>;
}

interface IMeta {
    type?: string;
    display?: boolean;
    isArray?: boolean;
    displayName?: string;
    displayType?: string;
    placeholder?: string;
    value?: string | number | boolean;
    displayProps?: IDisplayProps;
    options?: Array<IOption>;
    isDisabled?: boolean;
    isReadonly?: boolean;
    validation?: IValidation;
    dependencies?: IDependency;
    loader?: ILoader;
    mui?: any;
    bootstrap?: any;
    url?: string;
    className?: string;
    events?: IEvent;
    labelPlacement?: string;
    error?: {hasError: boolean, errorMsg: string};
    init?: IURLLoaderConfig;
    config?: IURLLoaderConfig;
    icons?: IIconConfig;
}

interface IOption {
    value: string;
    label: string;
    ref?: any;  // reference to original object
}

interface IURLLoaderConfig {
    type: string;   // url_loader, lazy_loader
    url: string;
    queryParams?: Array<TParam>; // query params
    pathParams?: Array<TParam>; // path params
    responseKey?: string;
    valueKey?: string;
    labelKey?: string;
    loadOn?: Array<string>;
    openTo?: string;        // for calendar -- year, month, day
    inputFormat?: string;   // for calendar 
    views?: string;         // for calendar
}
interface IIconConfig {
    [key: string]: {
        type: string;
        position?: string;
    };
}

interface IFieldConfig extends IURLLoaderConfig {

}

interface IDisplayProps {
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
    offset?: string;
    rs?: boolean;   // row start
    isStandalone?: boolean;
    align?: string;//left, right, center
    fieldLayout?: string;
    optionsLayout?: string;
}

interface ITheme {
    type: string;
    sectionLayout?: string;
    spacing?: string;
    className?: string;
    mui?: IMUITheme;
    bootstrap?: IBootstrapTheme;
}

interface IFieldValidation<T>{
    value: T;
    errorMsg: string;
}

interface IPatternFieldValidation extends IFieldValidation<T> {
    value: T;
    errorMsg: string;
    allowValidOnly?: boolean;
}

interface IValidation {
    required?: boolean | IFieldValidation<boolean>;
    pattern?: string | IPatternFieldValidation<string>;;
    min?: number | string | IFieldValidation<number | string>;
    max?: number | string;
    // @deprecated
    required_detail?: IValidationDetail;
    // @deprecated
    pattern_detail?: IPatternValidationDetail;
    // @deprecated
    min_detail?: IValidationDetail;
    // @deprecated
    max_detail?: IValidationDetail;
    // @deprecated
    info_detail?: IInfoDetail;
}

interface IValidationDetail {
    errorMsg?: string;
}

interface IPatternValidationDetail extends IValidationDetail {
    allowValidOnly?: boolean;
}

interface IInfoDetail {
    infoMsg?: string;
}

interface IDependency {
    exists?: IExistsDependency;
    enabled?: IEnabledDependency;
    load?: ILoadDependency;
    equals?: IEqualsDependency;
    displayType?: IDisplayTypeDependency;
}

interface IBaseDependency {
    section: string;
    ref: string;    
    value: string;
}

interface IExistsDependency extends IBaseDependency {

}

interface IEnabledDependency extends IBaseDependency {

}

interface ILoadDependency extends IBaseDependency {
    url: string;
}

interface IEqualsDependency extends IBaseDependency {
    currentValue: any;
    resetValue: any;
}

interface IDisplayTypeDependency extends IBaseDependency {
    
}
interface ILoader {

}

interface IFieldChange {
    type: string;
    reference: string;
}

interface IEvent {
    click?: IClickEvent;
    input?: IInputEvent;
    change?: IChangeEvent | Array<IChangeEvent>;
    open?: IConfig;   // for select
}

interface IMUITheme {
    variant?: string;
    size?: string;
    tabs?: {
        variant: string;
    }
}

interface IBootstrapTheme {
    
}

interface IClickEvent {
    type: string; // submit, reset, next, previous, action (custom)
    value?: string;
}
interface IInputEvent {
    type: string;
    url: string;
    params: Array<TParam>;
    labelKey?: string;
    valueKey?: string;
    responseKey?: string;
    response?: string;
    value?: string;
}

interface IChangeEvent {
    type: string;       // setter
    ref: string;
    valueKey: string;
    value: any;
}

interface IParamType {
    type?: string;
    ref?: string;       // reference field
    section?: string;   // reference section
}

type TParamType = IParamType | string | undefined;
type TParam = [string, TParamType];

interface IFormatterType {
    [key: string]: Function;
}
```
