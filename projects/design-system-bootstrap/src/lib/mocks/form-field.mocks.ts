import { FormFieldConfig } from '../core/interfaces/core.interface';

/**
 * Mock de campo de formulario en estado normal.
 */
export const MOCK_FORM_FIELD_NORMAL: FormFieldConfig = {
  label: 'Correo Electrónico',
  idInput: 'field-email-normal',
  type: 'email',
  placeholder: 'ejemplo@uceva.edu.co',
  value: 'juan.perez@uceva.edu.co',
  helperText: 'Le enviaremos un correo de confirmación.',
  hasError: false,
};

/**
 * Mock de campo de formulario en estado de error.
 */
export const MOCK_FORM_FIELD_ERROR: FormFieldConfig = {
  label: 'Contraseña de Acceso',
  idInput: 'field-password-error',
  type: 'password',
  placeholder: 'Ingrese su contraseña',
  value: '123',
  errorText: 'La contraseña debe contener al menos 8 caracteres.',
  hasError: true,
};

/**
 * Mock de campo de formulario en estado deshabilitado.
 */
export const MOCK_FORM_FIELD_DISABLED: FormFieldConfig = {
  label: 'Código de Estudiante',
  idInput: 'field-code-disabled',
  type: 'text',
  placeholder: '2026-UCEVA-001',
  value: '2026-UCEVA-001',
  disabled: true,
};
