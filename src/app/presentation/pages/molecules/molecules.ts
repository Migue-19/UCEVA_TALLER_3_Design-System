import { Component } from '@angular/core';
import {
  ButtonGroupData,
  ButtonGroupMolecule,
  ContainerAtom,
  FormFieldConfig,
  FormFieldMolecule,
  NavLink,
  NavLinkMolecule,
  UserInfoConfig,
  UserInfoMolecule,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
    FormFieldMolecule,
    UserInfoMolecule,
  ],
})
export class Molecules {
  buttonsGroupData: ButtonGroupData[] = [
    { idButton: 'idButtonPrimary', type: 'primary', text: 'Text Primary' },
    { idButton: 'idButtonSecondary', type: 'secondary', text: 'Text Secondary' },
    { idButton: 'idButtonSuccess', type: 'success', text: 'Text Success' },
    { idButton: 'idButtonDanger', type: 'danger', text: 'Text Danger' },
    { idButton: 'idButtonWarning', type: 'warning', text: 'Text Warning' },
    { idButton: 'idButtonInfo', type: 'info', text: 'Text Info' },
    { idButton: 'idButtonLight', type: 'light', text: 'Text Light' },
    { idButton: 'idButtonDark', type: 'dark', text: 'Text Dark' },
  ];

  navLinks: NavLink[] = [
    { text: 'Link 1', url: '/atoms' },
    { text: 'Link 2', url: '/molecules' },
    { text: 'Link 3', url: '/organisms' },
  ];

  formFieldNormal: FormFieldConfig = {
    label: 'Correo Institucional',
    idInput: 'showcase-email-normal',
    type: 'email',
    placeholder: 'nombre.apellido@uceva.edu.co',
    value: 'miguel.ruiz@uceva.edu.co',
    helperText: 'Enviaremos las notificaciones académicas a esta dirección.',
    hasError: false,
  };

  formFieldError: FormFieldConfig = {
    label: 'Contraseña de Acceso',
    idInput: 'showcase-password-error',
    type: 'password',
    placeholder: 'Mínimo 8 caracteres',
    value: '1234',
    errorText: 'La contraseña es demasiado corta. Debe tener al menos 8 caracteres.',
    hasError: true,
  };

  formFieldDisabled: FormFieldConfig = {
    label: 'Código de Estudiante',
    idInput: 'showcase-code-disabled',
    type: 'text',
    placeholder: 'Código no modificable',
    value: '2026-UCEVA-9941',
    disabled: true,
    helperText: 'Este campo es de solo lectura y lo administra la secretaría académica.',
  };

  userList: UserInfoConfig[] = [
    {
      name: 'Carolina Morales',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      initials: 'CM',
      role: 'Administradora del Sistema',
      roleTheme: 'primary',
    },
    {
      name: 'Miguel Ángel Ruiz',
      initials: 'MR',
      role: 'Desarrollador Frontend',
      roleTheme: 'success',
    },
    {
      name: 'Valentina Restrepo',
      initials: 'VR',
      role: 'Diseñadora UI/UX',
      roleTheme: 'warning',
    },
  ];

  lastFormFieldValue: string = '';

  onClick(idButton: string) {
    alert(`Click en el Boton de Grupo ${idButton}`);
  }

  onFormFieldChange(value: string) {
    this.lastFormFieldValue = value;
  }
}
