/**
 * Temas visuales disponibles.
 */
export type Themes = 
    | 'primary'
    | 'secondary' 
    | 'success' 
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

/** Tipo de tema para badges */
export type BadgeType = Themes;

/** Clases de texto disponibles para badges */
export type BadgeTypeText = 'text-white' | 'text-dark';

/** Tipo de tema para botones */
export type ButtonType = Themes;

/**
 * Configuración de un botón dentro de un grupo de botones.
 */
export interface ButtonGroupData {
  /** Identificador único del botón */
  idButton: string;

  /** Tipo visual del botón */
  type: ButtonType;

  /** Texto visible del botón */
  text: string;
}

/**
 * Representa un enlace de navegación.
 */
export interface NavLink {
    /** Texto visible del enlace */
    text: string;
    /** Url asociada al enlace */
    url: string;
}

/**
 * Configuración de la barra de navegación.
 */
export interface NavbarConfig {
  /** Título principal del Navbar */
  title: string;

  /** Configuración del icono del Navbar */
  iconConfig: NavbarIconConfig;

  /** Lista de enlaces de navegación */
  navLinks: NavLink[];
}

/**
 * Configuración del icono de la barra de navegación.
 */
export interface NavbarIconConfig {
    /** Nombre del icono (sin el prefijo `bi-`) */
    icon: string;

    /** Tamaño del icono en unidades `rem` */
    size: number;
}

/**
 * Tipos de entrada permitidos para los inputs del Design System.
 */
export type InputType = 'text' | 'email' | 'password' | 'number';

/**
 * Configuración para el componente de campo de formulario (FormFieldMolecule).
 */
export interface FormFieldConfig {
  /** Etiqueta visible asociada al campo */
  label: string;

  /** Identificador único del input */
  idInput: string;

  /** Tipo de campo de entrada */
  type: InputType;

  /** Texto de ayuda / placeholder del input */
  placeholder: string;

  /** Valor actual del campo */
  value?: string;

  /** Texto de ayuda complementario mostrado bajo el campo */
  helperText?: string;

  /** Mensaje de error mostrado cuando el campo no es válido */
  errorText?: string;

  /** Indica si el campo se encuentra en estado de error */
  hasError?: boolean;

  /** Indica si el campo está deshabilitado */
  disabled?: boolean;
}

/**
 * Configuración para el componente de información de usuario (UserInfoMolecule).
 */
export interface UserInfoConfig {
  /** Nombre visible del usuario */
  name: string;

  /** URL opcional de la fotografía de perfil */
  imageUrl?: string;

  /** Iniciales del usuario a mostrar cuando no hay imagen disponible */
  initials: string;

  /** Rol o posición del usuario en el sistema */
  role: string;

  /** Tema visual del badge correspondiente al rol */
  roleTheme: BadgeType;
}

/**
 * Configuración para la tarjeta de perfil de usuario (UserProfileCardOrganism).
 */
export interface UserProfileCardConfig {
  /** Información principal del usuario */
  userInfo: UserInfoConfig;

  /** Configuración del campo editable de correo electrónico */
  emailField: FormFieldConfig;

  /** Lista de acciones disponibles en el perfil */
  actions: ButtonGroupData[];
}