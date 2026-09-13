import { NavbarConfig, NavLink } from "../core/interfaces/core.interface";

export const MOCK_NAVBAR_LINKS: NavLink[] = [
    { text: 'Inicio', url: '/home' },
    { text: 'Perfil', url: '/profile' },
];

export const MOCK_NAVBAR_CONFIG: NavbarConfig = {
    title: 'Design System',
    iconConfig: {
      icon: 'bootstrap',
      size: 1.5,
    },
    navLinks: MOCK_NAVBAR_LINKS,
};