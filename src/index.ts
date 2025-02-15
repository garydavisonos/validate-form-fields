export interface ValidationOptions {
  minLength?: number;
  maxLength?: number;
  allowAlphanumericOnly?: boolean;
  blockHTML?: boolean;
  requireNonEmpty?: boolean;
}

export class ValidateFormFields {
  /**
   * Validates an input string based on the provided validation options.
   * @param input - The input string to validate.
   * @param options - The validation rules.
   * @returns A string containing an error message if validation fails, otherwise an empty string.
   */
  static validateInputText(input: string, options: ValidationOptions = {}): string {
    const {
      minLength = 3,
      maxLength = 255,
      allowAlphanumericOnly = true,
      blockHTML = true,
      requireNonEmpty = true,
    } = options;

    if (typeof input !== 'string') {
      return 'Input must be a valid text string.';
    }

    const trimmedInput = input.trim();

    if (requireNonEmpty && trimmedInput.length === 0) {
      return 'Input cannot be empty.';
    }

    if (minLength && trimmedInput.length < minLength) {
      return `Input must be at least ${minLength} characters.`;
    }

    if (maxLength && trimmedInput.length > maxLength) {
      return `Input must be no more than ${maxLength} characters.`;
    }

    if (allowAlphanumericOnly) {
      const allowedCharsRegex = /^[a-zA-Z0-9_-]+$/;
      if (!allowedCharsRegex.test(trimmedInput)) {
        return 'Input must only contain letters, numbers, hyphens (-), or underscores (_).';
      }
    }

    if (blockHTML) {
      const htmlCharRegex = /[<>/"'&]/;
      if (htmlCharRegex.test(trimmedInput)) {
        return 'Input cannot contain HTML characters like <, >, &, ", \', or /.';
      }
    }

    return ''; // No errors
  }

  /**
   * Attaches validation to an input field.
   * @param inputElement - The input field element.
   * @param options - The validation rules.
   */
  static attachValidation(inputElement: HTMLInputElement, options: ValidationOptions): void {
    inputElement.addEventListener('input', () => {
      const errorMessage = ValidateFormFields.validateInputText(inputElement.value, options);
      inputElement.setCustomValidity(errorMessage);
      inputElement.reportValidity();
    });
  }

  /**
   * Automatically attaches validation to elements matching a selector.
   * @param selector - The CSS selector for input elements.
   * @param options - The validation rules.
   */
  static validateFields(selector: string, options: ValidationOptions): void {
    const inputs = document.querySelectorAll<HTMLInputElement>(selector);
    inputs.forEach(input => {
      ValidateFormFields.attachValidation(input, options);
    });
  }
}