# metaforms-mui

> Material UI with metaforms
 [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Change logs
Updated default buttons

## Install

```bash
npm install --save @manojadams/metaforms-mui
```

## Basic Usage

### 1. Define your json schema
```typescript
const exampleSchema = {
    "fields": [{
        "name": "first_name",
        "meta": {
            "displayType": "text",
            "displayName": "First Name"
        }
    }, {
        "name": "last_name",
        "meta": {
            "displayType": "text",
            "displayName": "Last Name"
        }
    }]
}
```
### 2. Schema details
```typescript
export interface IUISchema {
    schema: ISchema;
}

export interface ISchema {
    fields: Array<IField>;
    theme?: ITheme;
    buttons?: Array<IField>;
    rest?: IRest;
}

export interface IRest {
    config: IConfig;
}

export interface IConfig {
    apihost?: string;
    basepath?: string;
    protocol?: string;
    headers?: Array<IConfigParam>;
}

export interface IConfigParam {
    key: string;
    value: string;
}

export interface IField {
    name: string;
    prop?: string;
    meta: IMeta;
    fields?: Array<IField>;
}

export interface IMeta {
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

export interface IOption {
    value: string;
    label: string;
    ref?: any;  // reference to original object
}

export interface IURLLoaderConfig {
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
export interface IIconConfig {
    [key: string]: {
        type: string;
        position?: string;
    };
}

export interface IFieldConfig extends IURLLoaderConfig {

}

export interface IDisplayProps {
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

export interface ITheme {
    type: string;
    sectionLayout?: string;
    spacing?: string;
    className?: string;
    mui?: IMUITheme;
    bootstrap?: IBootstrapTheme;
}

export interface IValidation {
    required?: boolean;
    required_detail?: IValidationDetail;
    pattern?: string;
    pattern_detail?: IPatternValidationDetail;
    min?: number | string;
    min_detail?: IValidationDetail;
    max?: number | string;
    max_detail?: IValidationDetail;
    info_detail?: IInfoDetail;
}

export interface IValidationDetail {
    errorMsg?: string;
}

export interface IPatternValidationDetail extends IValidationDetail {
    allowValidOnly?: boolean;
}

export interface IInfoDetail {
    infoMsg?: string;
}

export interface IDependency {
    exists?: IExistsDependency;
    enabled?: IEnabledDependency;
    load?: ILoadDependency;
    equals?: IEqualsDependency;
    displayType?: IDisplayTypeDependency;
}

export interface IBaseDependency {
    section: string;
    ref: string;    
    value: string;
}

export interface IExistsDependency extends IBaseDependency {

}

export interface IEnabledDependency extends IBaseDependency {

}

export interface ILoadDependency extends IBaseDependency {
    url: string;
}

export interface IEqualsDependency extends IBaseDependency {
    currentValue: any;
    resetValue: any;
}

export interface IDisplayTypeDependency extends IBaseDependency {
    
}
export interface ILoader {

}

export interface IFieldChange {
    type: string;
    reference: string;
}

export interface IEvent {
    click?: IClickEvent;
    input?: IInputEvent;
    change?: IChangeEvent | Array<IChangeEvent>;
    open?: IConfig;   // for select
}

export interface IMUITheme {
    variant?: string;
    size?: string;
    tabs?: {
        variant: string;
    }
}

export interface IBootstrapTheme {
    
}

export interface IClickEvent {
    type: string; // submit, reset, next, previous, action (custom)
    value?: string;
}
export interface IInputEvent {
    type: string;
    url: string;
    params: Array<TParam>;
    labelKey?: string;
    valueKey?: string;
    responseKey?: string;
    response?: string;
    value?: string;
}

export interface IChangeEvent {
    type: string;       // setter
    ref: string;
    valueKey: string;
    value: any;
}

export interface IParamType {
    type?: string;
    ref?: string;       // reference field
    section?: string;   // reference section
}

export type TParamType = IParamType | string | undefined;
export type TParam = [string, TParamType];

export interface IFormatterType {
    [key: string]: Function;
}
```

### 3. Usage

```tsx
import React, { Component } from 'react'

import MetaForm from '@manojadams/metaforms-mui'
import 'metaforms-mui/dist/index.css'

class Example extends Component {
  render() {
    return <MetaForm schema={exampleSchema} onSubmit={(formData) => {
      // submit data
    }}/>
  }
}
```

## License

MIT © [manojgetwealthy](https://github.com/manojgetwealthy)
