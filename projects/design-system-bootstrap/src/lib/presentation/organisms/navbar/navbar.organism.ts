import { Component, Input } from '@angular/core';
import { NavbarConfig } from '../../../core/interfaces/core.interface';
import { IconAtom } from '../../atoms/icon/icon.atom';
import { NavLinkMolecule } from '../../molecules/nav-link/nav-link.molecule';

/**
 * Barra de navegación principal del Design System.
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Orquesta átomos y moléculas para construir
 * una barra de navegación completa.
 *
 * Integra:
 * - `IconAtom` para el icono principal
 * - `NavLinkMolecule` para los enlaces de navegación
 */
@Component({
  selector: 'dsb-navbar-organism',
  templateUrl: './navbar.organism.html',
  imports: [IconAtom, NavLinkMolecule],
})
export class NavbarOrganism {

  /**
   * Configuración de la barra de navegación.
   *
   * @description
   * Define el título, icono y enlaces que componen
   * la barra de navegación.
   *
   * Cuando el valor es `null`, el componente
   * no renderiza contenido.
   *
   * @type {NavbarConfig | null}
   * @default null
   */
  @Input() navbarConfig: NavbarConfig | null = null;
}