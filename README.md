# mui-forms

> Material UI forms using json based schema
 [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Change logs
- [fix name attribute not coming](https://github.com/manojadams/mui-forms/issues/17)
  
## Advantages and features
- Mui Components
- Built-in layouting
- Supports custom components
- Easily define field relationships and build advanced forms
- Load data from remote api

## Install

```bash
npm install mui-forms
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
### 2. Usage

```tsx
import React from 'react'

import MuiForms from 'mui-forms';

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

### 3. Schema details
Check out the [file]([typescript-schema.md](https://github.com/manojadams/mui-forms/blob/master/typescript-schema.md))

## Contributions

Open source contribution is welcome.

## License

MIT © [manojgetwealthy](https://github.com/manojgetwealthy)

## Give a ⭐️ if you liked this project!
