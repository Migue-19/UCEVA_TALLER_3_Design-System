import { UserProfileCardConfig } from '../core/interfaces/core.interface';

/**
 * Mock de configuración para UserProfileCardOrganism con datos completos.
 */
export const MOCK_USER_PROFILE_CARD: UserProfileCardConfig = {
  userInfo: {
    name: 'jesus david mejia vergara',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQEkjURV88_Fcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722894589138?e=2147483647&v=beta&t=3zIUCptH6t1KqkExZREhXA0uoahxVsoPeRI7MlWHuTI',
    initials: 'JD',
    role: 'Administrador del Sistema',
    roleTheme: 'primary',
  },
  emailField: {
    label: 'Correo Institucional',
    idInput: 'profile-email-input',
    type: 'email',
    placeholder: 'nombre.apellido@uceva.edu.co',
    value: 'jdmejia@uceva.edu.co',
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
    name: 'Miguel Ángel Ruiz Urmendis',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQFZLQqx8rbCGQ/profile-displayphoto-shrink_400_400/B4EZQQHgvqGcAg-/0/1735437193239?e=1790812800&v=beta&t=QnpGOEHDBf6e--fFzuq_buT2nGsry07YfXk4ukULrv4',
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
