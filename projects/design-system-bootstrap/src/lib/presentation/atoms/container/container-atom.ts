import { Component, Input } from '@angular/core';

/**
 * Contenedor atómico del Design System.
 *
 * @description
 * Representa un contenedor básico reutilizable que
 * muestra un título y encapsula contenido visual.
 * Está pensado para estructurar secciones simples
 * dentro de moléculas u organismos.
 */
@Component({
  selector: 'dsb-container-atom',
  templateUrl: './container-atom.html',
})
export class ContainerAtom {
  /**
   * Título del contenedor.
   *
   * @description
   * Texto principal que identifica el contenido
   * encapsulado por el contenedor.
   *
   * @type {string}
   *
   * @required
   */
  @Input({ required: true }) title: string = '';
}
