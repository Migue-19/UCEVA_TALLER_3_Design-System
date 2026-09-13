import { UserInfoConfig } from '../core/interfaces/core.interface';

/**
 * Mock de usuario con fotografía de perfil y rol de administrador.
 */
export const MOCK_USER_INFO_WITH_IMAGE: UserInfoConfig = {
  name: 'Carolina Morales',
  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  initials: 'CM',
  role: 'Administradora',
  roleTheme: 'primary',
};

/**
 * Mock de usuario con iniciales de respaldo y rol de desarrollador.
 */
export const MOCK_USER_INFO_INITIALS: UserInfoConfig = {
  name: 'Miguel Ángel Ruiz',
  initials: 'MR',
  role: 'Desarrollador Senior',
  roleTheme: 'success',
};

/**
 * Mock de usuario con iniciales y rol de diseñador UI/UX.
 */
export const MOCK_USER_INFO_DESIGNER: UserInfoConfig = {
  name: 'Valentina Restrepo',
  initials: 'VR',
  role: 'Diseñadora UI/UX',
  roleTheme: 'warning',
};
