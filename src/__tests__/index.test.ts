import { ValidateFormFields, ValidationOptions } from '../index';

describe('ValidateFormFields', () => {
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    inputElement = document.createElement('input');
    document.body.appendChild(inputElement);
  });

  afterEach(() => {
    document.body.removeChild(inputElement);
  });

  test('should validate input text with minLength', () => {
    const options: ValidationOptions = { minLength: 5 };
    const errorMessage = ValidateFormFields.validateInputText('abc', options);
    expect(errorMessage).toBe('Input must be at least 5 characters.');
  });

  test('should validate input text with maxLength', () => {
    const options: ValidationOptions = { maxLength: 5 };
    const errorMessage = ValidateFormFields.validateInputText('abcdef', options);
    expect(errorMessage).toBe('Input must be no more than 5 characters.');
  });

  test('should validate input text with allowAlphanumericOnly', () => {
    const options: ValidationOptions = { allowAlphanumericOnly: true };
    const errorMessage = ValidateFormFields.validateInputText('abc@123', options);
    expect(errorMessage).toBe('Input must only contain letters, numbers, hyphens (-), or underscores (_).');
  });

  test('should validate input text with blockHTML', () => {
    const options: ValidationOptions = { blockHTML: true, allowAlphanumericOnly: false };
    const errorMessage = ValidateFormFields.validateInputText('<div>', options);
    expect(errorMessage).toBe('Input cannot contain HTML characters like <, >, &, ", \', or /.');
  });

  test('should validate input text with requireNonEmpty', () => {
    const options: ValidationOptions = { requireNonEmpty: true };
    const errorMessage = ValidateFormFields.validateInputText('', options);
    expect(errorMessage).toBe('Input cannot be empty.');
  });

  test('should attach validation to input element', () => {
    const options: ValidationOptions = { minLength: 5 };
    ValidateFormFields.attachValidation(inputElement, options);
    inputElement.value = 'abc';
    inputElement.dispatchEvent(new Event('input'));
    expect(inputElement.validationMessage).toBe('Input must be at least 5 characters.');
  });

  test('should validate multiple fields with a selector', () => {
    const options: ValidationOptions = { minLength: 5 };
    const inputElement2 = document.createElement('input');
    inputElement.classList.add('test-input');
    inputElement2.classList.add('test-input');
    document.body.appendChild(inputElement2);

    ValidateFormFields.validateFields('.test-input', options);

    inputElement.value = 'abc';
    inputElement2.value = 'abc';
    inputElement.dispatchEvent(new Event('input'));
    inputElement2.dispatchEvent(new Event('input'));

    expect(inputElement.validationMessage).toBe('Input must be at least 5 characters.');
    expect(inputElement2.validationMessage).toBe('Input must be at least 5 characters.');

    document.body.removeChild(inputElement2);
  });
});