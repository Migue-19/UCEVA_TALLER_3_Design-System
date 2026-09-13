import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormFieldConfig } from '../../../core/interfaces/core.interface';
import { InputAtom } from '../../atoms/input/input.atom';

/**
 * Molécula de campo de formulario del Design System.
 *
 * @description
 * Compone un elemento `<label>`, un componente atómico `InputAtom` y mensajes contextuales
 * de ayuda o validación de error según la configuración suministrada.
 */
@Component({
  selector: 'dsb-form-field-molecule',
  templateUrl: './form-field.molecule.html',
  imports: [CommonModule, InputAtom],
})
export class FormFieldMolecule {
  /** Configuración integral del campo de formulario */
  @Input() config!: FormFieldConfig;

  /**
   * Evento emitido al actualizarse el valor del input hijo.
   *
   * @emits string Nuevo valor ingresado en el campo
   */
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Propaga el cambio de valor generado por el `InputAtom` al componente padre.
   *
   * @param {string} value Nuevo valor recibido del input
   * @returns {void}
   */
  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
