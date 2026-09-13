import { UserProfileCardConfig } from '../core/interfaces/core.interface';

/**
 * Mock de configuración para UserProfileCardOrganism con datos completos.
 */
export const MOCK_USER_PROFILE_CARD: UserProfileCardConfig = {
  userInfo: {
    name: 'Carolina Morales',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    initials: 'CM',
    role: 'Administradora del Sistema',
    roleTheme: 'primary',
  },
  emailField: {
    label: 'Correo Institucional',
    idInput: 'profile-email-input',
    type: 'email',
    placeholder: 'nombre.apellido@uceva.edu.co',
    value: 'carolina.morales@uceva.edu.co',
    helperText: 'Modifique su correo y presione Guardar para actualizar su perfil.',
    hasError: false,
  },
  actions: [
    { idButton: 'btn-cancel', type: 'secondary', text: 'Cancelar' },
    { idButton: 'btn-save', type: 'success', text: 'Guardar Cambios' },
  ],
};

/**
 * Mock de configuración para UserProfileCardOrganism con usuario sin foto y estado inicial.
 */
export const MOCK_USER_PROFILE_CARD_INITIALS: UserProfileCardConfig = {
  userInfo: {
    name: 'Miguel Ángel Ruiz',
    initials: 'MR',
    role: 'Estudiante de Ingeniería',
    roleTheme: 'info',
  },
  emailField: {
    label: 'Correo Electrónico',
    idInput: 'student-email-input',
    type: 'email',
    placeholder: 'usuario@uceva.edu.co',
    value: 'miguel.ruiz@uceva.edu.co',
    helperText: 'Su correo será verificado por la coordinación.',
    hasError: false,
  },
  actions: [
    { idButton: 'btn-cancel', type: 'light', text: 'Cancelar' },
    { idButton: 'btn-save', type: 'primary', text: 'Guardar' },
  ],
};
