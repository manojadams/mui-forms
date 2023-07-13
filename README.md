# mui-forms

> Material UI forms using json based schema
 [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
import React, { Component } from 'react'

import MuiForms from 'mui-forms';

class Example extends Component {
  render() {
    return <MuiForms schema={exampleSchema} onSubmit={(formData) => {
      // submit data
    }} />
  }
}
```

### 3. Schema details
Check out the [file]([typescript-schema.md](https://github.com/manojadams/mui-forms/blob/master/typescript-schema.md))

## Contributions

Open source contribution is very much welcome.

## Note

- Give us a star if you like the library
- Give us your feedback. 
- Contributions of any kind is welcome.

## License

MIT © [manojgetwealthy](https://github.com/manojgetwealthy)

### Lets work together, lets grow together

## Give a ⭐️ if you liked this project!
