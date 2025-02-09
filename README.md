# Validate Form Fields
A lightweight, zero-dependency JavaScript/TypeScript library for validating form inputs with customisable rules. Supports length limits, alphanumeric enforcement, HTML blocking, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [TODO](#todo)
- [License](#license)

## Installation

To install the library, you can use npm or yarn:

```bash
npm install validate-form-fields
```

## Usage

Basic examples:

```JavaScript 
import  { ValidateFormFields } from 'validate-form-fields';

  useEffect(() => {
    const input = document.getElementById('name') as HTMLInputElement;
    if (input){
      ValidateFormFields.attachValidation(input, {
        minLength: 3,
        maxLength: 255,
        allowAlphanumericOnly: true,
        blockHTML: true,
        requireNonEmpty: true,
      });
    }
  }, []);
```

```JavaScript 
import  { ValidateFormFields } from 'validate-form-fields';

const input = document.getElementById('name');
if (input){
    ValidateFormFields.attachValidation(input, {
    minLength: 3,
    maxLength: 255,
    allowAlphanumericOnly: true,
    blockHTML: true,
    requireNonEmpty: true,
    });
}

```

## License

Fix failed Jest tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.