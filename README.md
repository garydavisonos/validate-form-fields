# Validation Form Fields
A lightweight, zero-dependency JavaScript/TypeScript library for validating form inputs with customisable rules. Supports length limits, alphanumeric enforcement, HTML blocking, and more.

![Code Quality](https://github.com/garydavisonos/validation-form-fields/actions/workflows/code.quality.yml/badge.svg)
![Publish to npm](https://github.com/garydavisonos/validation-form-fields/actions/workflows/publish.yml/badge.svg)
![Version](https://img.shields.io/npm/v/validation-form-fields)
![ESLint](https://img.shields.io/badge/code%20style-eslint-brightgreen)
![TypeScript](https://img.shields.io/badge/language-typescript-blue)

## Table of Contents- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

To install the library, you can use npm or yarn:

```bash
npm install validation-form-fields
```

## Usage

Basic examples:

```JavaScript 
import  { ValidationFormFields } from 'validation-form-fields';

  useEffect(() => {
    const input = document.getElementById('name') as HTMLInputElement;
    if (input){
      ValidationFormFields.attachValidation(input, {
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
import  { ValidationFormFields } from 'validation-form-fields';

const input = document.getElementById('name');
if (input){
    ValidationFormFields.attachValidation(input, {
    minLength: 3,
    maxLength: 255,
    allowAlphanumericOnly: true,
    blockHTML: true,
    requireNonEmpty: true,
    });
}

```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.