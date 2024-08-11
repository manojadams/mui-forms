<div>
    <div align="center">
        <a href="https://mui.com/core/" rel="noopener" target="_blank"><img width="80" src="https://mui-forms.vercel.app/logos/logo.png" alt="MUI Forms logo"></a>
    </div>
  <p align="center">Create advanced material forms</p>
</div>

## About
Create beautiful advanced forms with a JSON-based schema
  
## Advantages and features
- Material UI components
- Built-in layouting
- Responsive
- Support for custom components
- Easily define field relationships and build advanced forms
- Load data from API
- Extensible
- Simple forms
- Wizard forms
- Stepper forms
- Mobile-ready
- Production-ready

## Installation

```bash
npm install mui-forms
```

## Documentation
Visit the following page for detailed documentation: https://mui-forms.vercel.app

## Basic Usage

### 1. Define your JSON schema
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
### 2. Usage

```tsx
import React from 'react';
import MuiForms from 'mui-forms';
import exampleSchema from '<example-schema.json>';

export function MyForm() {
    return (
        <MuiForms
            schema={exampleSchema}
            onSubmit={(formData) => {
              // submit data
            }}
        />
    );
}
```

## Input Properties
| S.No | Name | Description | Type |
|------|------|-------------|------|
|1| buttons | Provide custom button components for previous, next and submit actions for footer section| Map of button names and button components |
|2| className | Sets the value of class attribute of the root component | string|
|3| changeResponseMode | It configures data passed to onChange event. <a>Available values:</a><ul><li>form-data</li><li> section-data</li></ul> | string|
|4| components | Custom template components mapped with schema using `displayType` property as `template`. More detail in docs.| Map of template names and components |
|5| config | Provide configuration options like spacing(gapX, gapY), size, tabs, variant. More detail in docs.| Map of config names and values |
|6| controls | Custom components mapped with schema using `displayType` property | Map of displayType names and JSX components |
|7| data | Contains initial form data values with which form is loaded| Parsed JSON |
|8| fns | A mapping of function names and functions which is referred inside schema by function name| Map of function name and function |
|9| icons | Contains a mapping of icons by name | Map of name and JSX element |
|10| lastPageNumber | Set the last number of a grouped form so that pages after the last page number are not considered and shown| number |
|11| loader| A custom component that overrides the default loader on next/submit action| React Component |
|12| name| Name of the form | string |
|13| nextResponseMode| It configures data needs that is passed to onNext event. <a>Available values:</a><ul> <li>form-data (passes all the form-data)</li><li> page-date (passes only the current screen form-data in view) </li></ul>.| string |
|14| pageNumber| The page number with which a grouped form should open by default. If none specified, it is by default 1| number |
|15| rest| API configuration details. More detail in docs|
|16| schema*| JSON based schema containing all form fields details|
|17| sectionLayout| Available values: default, stepper, tabs, wizards. More detail in docs| string |
|19| onChange| A callback function called on each form field value change| function |
|20| onError| A callback function called on each form field error| function |
|21| onPrevious| A callback function called on click of previous button| function |
|22| onNext| A callback function called on click of next button| function |
|23| onSubmit*| A callback function called on form submission| function |
|24| onSubmtiError| A callback function to be called whenever there is a submit error| function |
|25| onPopupClose| A callback function to be called when popup's from certain form fields are closed| function |

## Mandatory properties
- schema
- onSubmit

## Schema details
[Check out details here https://mui-forms.vercel.app/schema](https://mui-forms.vercel.app/schema)

## Change logs
- [fix #80: preload data not working for fields with no prop](https://github.com/manojadams/metaforms-core/issues/80)
- [fix #104: fix footer next button text](https://github.com/manojadams/mui-forms/issues/104)

## Contributions

Your contribution is very welcome and highly appreciated. To contribute, you can fork the repo, make your changes and submit a PR/MR to the master branch.

You can contribute in many ways:
- Work on features/enhancements
- Work on bug fixes
- Improve on existing functionalities
- Improve documentation
- Add more examples/improve existing example
- Participate in discussions
- Provide your valuable feedback/suggestions.

## Give a ⭐️ if you liked this project!

## License

MIT © [manojadams](https://github.com/manojadams)
