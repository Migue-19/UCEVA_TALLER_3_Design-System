import { Component, Input } from '@angular/core';
import { Themes } from '../../../core/interfaces/core.interface';

/**
 * Átomo de avatar de usuario del Design System.
 *
 * @description
 * Representa la fotografía de un usuario o sus iniciales en un contenedor circular
 * con soporte para diferentes tamaños y temas de color de Bootstrap.
 */
@Component({
  selector: 'dsb-avatar-atom',
  template: `
    @if (hasImage()) {
      <img
        [src]="imageUrl"
        [alt]="initials"
        class="rounded-circle object-fit-cover shadow-sm"
        [style.width.rem]="size"
        [style.height.rem]="size" />
    } @else {
      <div
        class="rounded-circle d-inline-flex align-items-center justify-content-center fw-bold shadow-sm"
        [class]="getBgClass()"
        [class.text-white]="theme !== 'light' && theme !== 'warning' && theme !== 'info'"
        [class.text-dark]="theme === 'light' || theme === 'warning' || theme === 'info'"
        [style.width.rem]="size"
        [style.height.rem]="size"
        [style.font-size.rem]="size * 0.38">
        {{ initials }}
      </div>
    }
  `,
})
export class AvatarAtom {
  /** URL de la fotografía de perfil del usuario */
  @Input() imageUrl?: string;

  /** Iniciales del usuario a mostrar cuando no hay imagen disponible */
  @Input() initials: string = '';

  /** Tamaño del avatar en unidades rem */
  @Input() size: number = 3;

  /** Tema visual del avatar basado en las opciones de Bootstrap */
  @Input() theme: Themes = 'primary';

  /**
   * Determina si el avatar cuenta con una imagen válida configurada.
   *
   * @returns {boolean} `true` si la URL existe y no está vacía, de lo contrario `false`
   */
  hasImage(): boolean {
    return !!this.imageUrl && this.imageUrl.trim().length > 0;
  }

  /**
   * Retorna la clase CSS de fondo de Bootstrap según el tema seleccionado.
   *
   * @returns {string} Clase de fondo de Bootstrap (ej. `bg-primary`)
   */
  getBgClass(): string {
    return `bg-${this.theme}`;
  }
}
