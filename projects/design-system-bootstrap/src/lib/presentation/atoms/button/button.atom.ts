import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ButtonType } from '../../../core/interfaces/core.interface';

/**
 * Botón atómico del Design System.
 *
 * @description
 * Representa un botón reutilizable basado en Bootstrap.
 * Emite un evento al ser presionado.
 */
@Component({
  selector: 'dsb-button-atom',
  template: `
    <button 
      [id]="idButton"
      type="button" 
      class="btn"
      [class]="getClass()"
      (click)="onEmit()">
      {{ text }}
    </button>`,
})
export class ButtonAtom {
  /** Texto visible del botón */
  @Input() text: string = '';

  /** Identificador único del botón */
  @Input() idButton: string = '';

  /** Tipo visual del botón */
  @Input() type: ButtonType = 'primary';

  /**
   * Evento emitido al hacer click en el botón.
   *
   * @emits string Identificador del botón
   */
  @Output() clicker: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Retorna la clase CSS correspondiente al tipo del botón.
   *
   * @returns {string} Clase Bootstrap del botón
   */
  getClass(): string {
    return `btn-${this.type}`;
  }

  /**
   * Emite el evento `clicker` con el identificador del botón.
   *
   * @returns {void}
   */
  onEmit(): void {
    this.clicker.emit(this.idButton);
  }
}