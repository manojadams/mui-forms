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
