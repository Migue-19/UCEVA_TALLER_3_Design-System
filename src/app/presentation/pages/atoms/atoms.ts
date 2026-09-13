import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AvatarAtom,
  BadgeAtom,
  BadgeType,
  BadgeTypeText,
  ButtonAtom,
  ButtonType,
  ContainerAtom,
  IconAtom,
  InputAtom,
  InputType,
  Themes,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './atoms.html',
  imports: [
    BadgeAtom,
    ButtonAtom,
    IconAtom,
    ContainerAtom,
    InputAtom,
    AvatarAtom,
    CommonModule,
  ],
})
export class Atoms {
  badges: { type: BadgeType; typeText: BadgeTypeText }[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

  buttons: { type: ButtonType; idButton: string }[] = [
    { type: 'primary', idButton: 'idButttonPrimary' },
    { type: 'secondary', idButton: 'idButttonSecondary' },
    { type: 'success', idButton: 'idButttonSuccess' },
    { type: 'danger', idButton: 'idButttonDanger' },
    { type: 'warning', idButton: 'idButttonWarning' },
    { type: 'info', idButton: 'idButttonInfo' },
    { type: 'light', idButton: 'idButttonLight' },
    { type: 'dark', idButton: 'idButttonDark' },
  ];

  icons: { name: string; size: number }[] = [
    { name: 'bootstrap', size: 1 },
    { name: 'apple', size: 2 },
    { name: 'bell', size: 3 },
    { name: 'android', size: 4 },
    { name: 'ban', size: 5 },
  ];

  inputs: { id: string; type: InputType; placeholder: string; value: string; disabled?: boolean }[] = [
    { id: 'input-text', type: 'text', placeholder: 'Ingrese su nombre completo', value: 'Miguel Ángel Ruiz' },
    { id: 'input-email', type: 'email', placeholder: 'correo@uceva.edu.co', value: 'miguel.ruiz02@uceva.edu.co' },
    { id: 'input-password', type: 'password', placeholder: 'Ingrese su contraseña', value: 'secreto123' },
    { id: 'input-number', type: 'number', placeholder: 'Semestre cursado', value: '8' },
    { id: 'input-disabled', type: 'text', placeholder: 'Campo deshabilitado', value: 'Solo Lectura', disabled: true },
  ];

  avatarsWithImage: { imageUrl: string; initials: string; size: number }[] = [
    { imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', initials: 'CM', size: 2.5 },
    { imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', initials: 'JA', size: 3.5 },
    { imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', initials: 'VR', size: 4.5 },
  ];

  avatarsWithInitials: { initials: string; theme: Themes; size: number }[] = [
    { initials: 'PR', theme: 'primary', size: 3 },
    { initials: 'SC', theme: 'secondary', size: 3 },
    { initials: 'OK', theme: 'success', size: 3 },
    { initials: 'AL', theme: 'danger', size: 3 },
    { initials: 'WN', theme: 'warning', size: 3 },
    { initials: 'IN', theme: 'info', size: 3 },
    { initials: 'DK', theme: 'dark', size: 3 },
  ];

  lastInputValue: string = '';

  onClick(idButton: string) {
    alert(`Click en el Boton ${idButton}`);
  }

  onInputChange(value: string) {
    this.lastInputValue = value;
  }
}