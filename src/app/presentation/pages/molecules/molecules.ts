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
      name: 'jesus david mejia vergara',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQEkjURV88_Fcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722894589138?e=2147483647&v=beta&t=3zIUCptH6t1KqkExZREhXA0uoahxVsoPeRI7MlWHuTI',
      initials: 'JD',
      role: 'Administrador del Sistema',
      roleTheme: 'primary',
    },
    {
      name: 'Miguel Ángel Ruiz urmendis',
      initials: 'MR',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQFZLQqx8rbCGQ/profile-displayphoto-shrink_400_400/B4EZQQHgvqGcAg-/0/1735437193239?e=1790812800&v=beta&t=QnpGOEHDBf6e--fFzuq_buT2nGsry07YfXk4ukULrv4',
      role: 'Desarrollador Frontend',
      roleTheme: 'success',
    },
    {
      name: 'Jolmer alexander viedma agudelo',
      initials: 'JA',
      role: 'Diseñador UI/UX',
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
