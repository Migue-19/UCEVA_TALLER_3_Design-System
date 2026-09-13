import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfileCardConfig } from '../../../core/interfaces/core.interface';
import { ButtonGroupMolecule } from '../../molecules/button-group/button-group.molecule';
import { FormFieldMolecule } from '../../molecules/form-field/form-field.molecule';
import { UserInfoMolecule } from '../../molecules/user-info/user-info.molecule';

/**
 * Organismo de tarjeta de perfil de usuario del Design System.
 *
 * @description
 * Representa una sección interactiva y funcional para la visualización y edición
 * de los datos de un usuario. Compone la cabecera con `UserInfoMolecule`, el campo de
 * edición con `FormFieldMolecule` y las acciones con `ButtonGroupMolecule`.
 */
@Component({
  selector: 'dsb-user-profile-card-organism',
  templateUrl: './user-profile-card.organism.html',
  imports: [CommonModule, UserInfoMolecule, FormFieldMolecule, ButtonGroupMolecule],
})
export class UserProfileCardOrganism {
  /** Configuración estructural y de datos del perfil de usuario */
  @Input() config!: UserProfileCardConfig;

  /**
   * Evento emitido al presionar la acción de guardar.
   *
   * @emits string Valor actualizado del campo editable
   */
  @Output() save: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Evento emitido al presionar la acción de cancelar.
   *
   * @emits void
   */
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  /** Almacena localmente el último valor ingresado en el campo editable */
  currentEmailValue: string = '';

  /**
   * Actualiza el valor temporal en respuesta a cambios en el campo de texto.
   *
   * @param {string} newValue Nuevo valor ingresado
   * @returns {void}
   */
  onEmailChange(newValue: string): void {
    this.currentEmailValue = newValue;
  }

  /**
   * Procesa las acciones de los botones del grupo y despacha el evento correspondiente.
   *
   * @param {string} idButton Identificador del botón pulsado
   * @returns {void}
   */
  onActionClick(idButton: string): void {
    const normalizedId = idButton.toLowerCase();
    if (normalizedId.includes('save') || normalizedId.includes('guardar')) {
      const finalValue =
        this.currentEmailValue !== ''
          ? this.currentEmailValue
          : (this.config?.emailField?.value ?? '');
      this.save.emit(finalValue);
    } else if (normalizedId.includes('cancel') || normalizedId.includes('cancelar')) {
      this.cancel.emit();
    }
  }
}
