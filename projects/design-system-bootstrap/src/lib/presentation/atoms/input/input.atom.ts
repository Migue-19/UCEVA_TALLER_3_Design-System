import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../../core/interfaces/core.interface';

/**
 * Átomo de campo de entrada (input) del Design System.
 *
 * @description
 * Componente atómico reutilizable basado en el control de formulario de Bootstrap.
 * Permite capturar texto del usuario y emite cambios de valor en tiempo real.
 */
@Component({
  selector: 'dsb-input-atom',
  template: `
    <input
      [id]="idInput"
      [type]="type"
      [value]="value"
      [placeholder]="placeholder"
      [disabled]="disabled"
      class="form-control"
      (input)="onInput($event)" />
  `,
})
export class InputAtom {
  /** Valor actual del campo de entrada */
  @Input() value: string = '';

  /** Texto de ayuda / marcador de posición */
  @Input() placeholder: string = '';

  /** Tipo de campo de entrada (text, email, password, number) */
  @Input() type: InputType = 'text';

  /** Identificador único del input en el DOM */
  @Input() idInput: string = '';

  /** Estado de habilitación del campo */
  @Input() disabled: boolean = false;

  /**
   * Evento emitido cuando el usuario modifica el valor del input.
   *
   * @emits string Nuevo valor ingresado
   */
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Manejador del evento de entrada del input nativo.
   *
   * @description
   * Actualiza el valor interno del componente y emite el evento `valueChange`.
   *
   * @param {Event} event Evento de input del navegador
   * @returns {void}
   */
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }
}
