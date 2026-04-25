<div align="center">
    <a href="https://mui.com/core/" rel="noopener" target="_blank"><img width="80" src="https://mui-forms.vercel.app/logos/logo.png" alt="MUI Forms logo"></a>
    <h1>MUI Forms</h1>
    <p>Create advanced material forms with JSON-based schemas</p>
    <p>
        <a href="https://www.npmjs.com/package/mui-forms"><img alt="npm version" src="https://img.shields.io/npm/v/mui-forms.svg?style=flat-square"></a>
        <a href="https://github.com/manojadams/mui-forms/blob/master/LICENSE"><img alt="MIT License" src="https://img.shields.io/npm/l/mui-forms.svg?style=flat-square"></a>
        <a href="https://nodejs.org/"><img alt="Node.js >=10" src="https://img.shields.io/node/v/mui-forms.svg?style=flat-square"></a>
    </p>
</div>

## About
Create beautiful advanced forms with a JSON-based schema

## Table of Contents
- [Features](#advantages-and-features)
- [Installation](#installation)
- [System Requirements](#system-requirements)
- [Documentation](#documentation)
- [Basic Usage](#basic-usage)
- [Input Properties](#input-properties)
- [Contributions](#contributions)

## System Requirements
- **Node.js**: >= 10
- **React**: 18.x or 19.x
- **Material-UI (MUI)**: Compatible with the latest versions

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
**Full documentation with examples**: https://mui-forms.vercel.app

For detailed information about schema configuration, custom fields, and advanced usage, visit the [complete documentation](https://mui-forms.vercel.app).

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

| Name               | Description           |
| ------------------ | ---------------------------------------- |
| className          | Name of class attribute assigned to the root form element |
| name               | The name of the form  |
| config             | Configuration options for the form. [Read more](https://mui-forms.vercel.app/config)  |
| data               | Contains initial form data values when the form is loaded. [Read more](https://mui-forms.vercel.app/preload-data)  |
| schema             | JSON-based schema for rendering the form. [Read more](https://mui-forms.vercel.app/schema)  |
| controls           | Custom fields. [Read more](https://mui-forms.vercel.app/custom-fields/about)  |
| components         | Custom template components mapped with schema using displayType property as template. [Read more](https://mui-forms.vercel.app/custom-fields/custom-components)  |
| pageNumber         | The default tab on opening the form (grouped form) |
| lastPageNumber     | The last page number will exclude any tabs that appear after the lastPageNumber tab |
| onChange           | A function that will be called whenever the value of a field changes. The second parameter provided to this function contains the complete form data. |
| onError            | A function that will be called whenever there is an error with a field. |
| onNext             | A function that will be called when when the user attempts to navigate to the next section of a grouped form |
| onPrevious         | A function that will be called when when the user attempts to navigate to the previous section of a grouped form |
| onSubmit           | A function that will be called when the form is submitted |
| changeResponseMode | Value: "form-data", "section-data", "default". <br /> **`form-data`**: onChange event will pass all the form data as a second parameter. <br />**`section-data`**: onChange event will pass all the section data as a second parameter |
| nextResponseMode   | Value: "form-data", "page-data" <br/> **`form-data`**: onNext event will send all the form data (onNext). <br /> **`page-data`**: onNext event will send all the date of the current page. <br/> `Note`: onNext is triggered on click of **Next** button |


## Mandatory properties
- schema
- onSubmit

## Schema details
[Check out details here https://mui-forms.vercel.app/schema](https://mui-forms.vercel.app/schema)

## Contributions

To contribute, you can fork the repo, make your changes and submit a PR/MR to the master branch.

You can contribute in many ways:
- Work on features/enhancements
- Work on bug fixes
- Improve on existing functionalities
- Improve documentation
- Add more examples/improve existing example
- Participate in discussions
- Provide your valuable feedback/suggestions

## Roadmap & Changes

See [CHANGELOG.md](./CHANGELOG.md) for a complete list of changes in each release.

## Show Your Support

Please give this project a star ⭐️ if you find it helpful!

## License

MIT © [manojadams](https://github.com/manojadams)
