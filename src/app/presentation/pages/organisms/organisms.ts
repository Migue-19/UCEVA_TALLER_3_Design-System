import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ContainerAtom,
  NavbarConfig,
  NavbarOrganism,
  UserProfileCardConfig,
  UserProfileCardOrganism,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [
    NavbarOrganism,
    ContainerAtom,
    UserProfileCardOrganism,
    CommonModule,
  ],
})
export class Organisms {
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2,
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ],
  };

  adminProfileCard: UserProfileCardConfig = {
    userInfo: {
      name: 'Carolina Morales',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      initials: 'CM',
      role: 'Directora Académica',
      roleTheme: 'primary',
    },
    emailField: {
      label: 'Correo Electrónico Institucional',
      idInput: 'organism-email-admin',
      type: 'email',
      placeholder: 'carolina.morales@uceva.edu.co',
      value: 'carolina.morales@uceva.edu.co',
      helperText: 'Ingrese su nuevo correo corporativo y presione Guardar Cambios.',
      hasError: false,
    },
    actions: [
      { idButton: 'btn-cancel', type: 'secondary', text: 'Cancelar' },
      { idButton: 'btn-save', type: 'success', text: 'Guardar Cambios' },
    ],
  };

  studentProfileCard: UserProfileCardConfig = {
    userInfo: {
      name: 'Miguel Ángel Ruiz',
      initials: 'MR',
      role: 'Estudiante de Ingeniería',
      roleTheme: 'info',
    },
    emailField: {
      label: 'Correo de Contacto',
      idInput: 'organism-email-student',
      type: 'email',
      placeholder: 'usuario@uceva.edu.co',
      value: 'miguel.ruiz02@uceva.edu.co',
      helperText: 'Verifique que la dirección sea accesible para recibir credenciales.',
      hasError: false,
    },
    actions: [
      { idButton: 'btn-cancel-student', type: 'light', text: 'Cancelar' },
      { idButton: 'btn-save-student', type: 'primary', text: 'Guardar Perfil' },
    ],
  };

  statusMessage: string = '';

  onSaveProfile(updatedEmail: string) {
    this.statusMessage = `Perfil guardado con éxito. Correo registrado: ${updatedEmail}`;
    alert(this.statusMessage);
  }

  onCancelProfile() {
    this.statusMessage = 'Edición de perfil cancelada por el usuario.';
    alert(this.statusMessage);
  }
}
