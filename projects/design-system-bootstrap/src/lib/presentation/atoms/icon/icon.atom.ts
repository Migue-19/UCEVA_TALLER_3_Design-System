import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Componente visual para renderizar íconos de Bootstrap Icons.
 *
 * @remarks
 * Este componente encapsula el uso de Bootstrap Icons (`bi-*`),
 * evitando el uso directo de clases CSS en las plantillas
 * y promoviendo reutilización y consistencia visual.
 *
 * @example
 * ```html
 * <dsb-icon-atom icon="bootstrap"></dsb-icon-atom>
 * <dsb-icon-atom icon="person-fill"></dsb-icon-atom>
 * ```
 */
@Component({
  selector: 'dsb-icon-atom',
  template: `<i class="bi" [class]="'bi-' + icon" [style.fontSize]="size + 'rem'" ></i>`,
  imports: [CommonModule]
})
export class IconAtom {
  /**
   * Nombre del ícono de Bootstrap.
   *
   * @remarks
   * Este valor corresponde al sufijo del ícono definido por Bootstrap Icons,
   * sin el prefijo `bi-`.
   *
   * @example
   * - `"bootstrap"`
   * - `"apple"`
   * - `"bell"`
   *
   * @required
   */
  @Input({ required: true }) icon: string = '';
  /**
   * Tamaño del ícono.
   *
   * @description
   * Define el tamaño visual del ícono utilizando la unidad relativa `rem`.
   * El valor recibido se multiplica por `1rem` para mantener
   * consistencia con la tipografía base del sistema.
   *
   * @remarks
   * - `1` equivale a `1rem`
   * - `1.5` equivale a `1.5rem`
   * - `2` equivale a `2rem`
   *
   * Se recomienda utilizar valores enteros o decimales positivos
   * para garantizar una correcta visualización.
   *
   * @default 1
   *
   * @example
   * ```html
   * <dsb-icon-atom icon="bell" [size]="1.25"></dsb-icon-atom>
   * <dsb-icon-atom icon="gear" [size]="2"></dsb-icon-atom>
   * ```
   */
  @Input() size: number = 1;
}
