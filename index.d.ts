export interface ValidationOptions {
    minLength?: number;
    maxLength?: number;
    allowAlphanumericOnly?: boolean;
    blockHTML?: boolean;
    requireNonEmpty?: boolean;
}
export declare class ValidateFormFields {
    /**
     * Validates an input string based on the provided validation options.
     * @param input - The input string to validate.
     * @param options - The validation rules.
     * @returns A string containing an error message if validation fails, otherwise an empty string.
     */
    static validateInputText(input: string, options?: ValidationOptions): string;
    /**
     * Attaches validation to an input field.
     * @param inputElement - The input field element.
     * @param options - The validation rules.
     */
    static attachValidation(inputElement: HTMLInputElement, options: ValidationOptions): void;
    /**
     * Automatically attaches validation to elements matching a selector.
     * @param selector - The CSS selector for input elements.
     * @param options - The validation rules.
     */
    static validateFields(selector: string, options: ValidationOptions): void;
}
