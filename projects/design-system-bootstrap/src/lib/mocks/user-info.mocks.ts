import { UserInfoConfig } from '../core/interfaces/core.interface';

/**
 * Mock de usuario con fotografía de perfil y rol de administrador.
 */
export const MOCK_USER_INFO_WITH_IMAGE: UserInfoConfig = {
  name: 'jesus david mejia vergara',
  imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQEkjURV88_Fcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722894589138?e=2147483647&v=beta&t=3zIUCptH6t1KqkExZREhXA0uoahxVsoPeRI7MlWHuTI',
  initials: 'JD',
  role: 'Administrador',
  roleTheme: 'primary',
};

/**
 * Mock de usuario con iniciales de respaldo y rol de desarrollador.
 */
export const MOCK_USER_INFO_INITIALS: UserInfoConfig = {
  name: 'Miguel Ángel Ruiz urmendis',
  imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQFZLQqx8rbCGQ/profile-displayphoto-shrink_400_400/B4EZQQHgvqGcAg-/0/1735437193239?e=1790812800&v=beta&t=QnpGOEHDBf6e--fFzuq_buT2nGsry07YfXk4ukULrv4',
  initials: 'MR',
  role: 'Desarrollador Senior',
  roleTheme: 'success',
};

/**
 * Mock de usuario con iniciales y rol de diseñador UI/UX.
 */
export const MOCK_USER_INFO_DESIGNER: UserInfoConfig = {
  name: 'Jolmer Alexander viedma agudelo',
  initials: 'JA',
  role: 'Diseñador UI/UX',
  roleTheme: 'warning',
};
