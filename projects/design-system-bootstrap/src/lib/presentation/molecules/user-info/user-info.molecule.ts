import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeTypeText, UserInfoConfig } from '../../../core/interfaces/core.interface';
import { AvatarAtom } from '../../atoms/avatar/avatar.atom';
import { BadgeAtom } from '../../atoms/badge/badge.atom';

/**
 * Molécula de información de usuario del Design System.
 *
 * @description
 * Compone un `AvatarAtom` con la foto o iniciales del usuario, el nombre completo
 * y un `BadgeAtom` que resalta el rol o cargo dentro del sistema.
 */
@Component({
  selector: 'dsb-user-info-molecule',
  templateUrl: './user-info.molecule.html',
  imports: [CommonModule, AvatarAtom, BadgeAtom],
})
export class UserInfoMolecule {
  /** Configuración con los datos del usuario a desplegar */
  @Input() config!: UserInfoConfig;

  /**
   * Determina la clase de color para el texto del badge según el tema del rol.
   *
   * @returns {BadgeTypeText} `'text-dark'` para temas claros o `'text-white'` para temas oscuros
   */
  getBadgeTextClass(): BadgeTypeText {
    if (
      this.config &&
      (this.config.roleTheme === 'light' ||
        this.config.roleTheme === 'warning' ||
        this.config.roleTheme === 'info')
    ) {
      return 'text-dark';
    }
    return 'text-white';
  }
}
