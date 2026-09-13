import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_NAVBAR_CONFIG } from '../../../mocks/navbar.mocks';
import { IconAtom } from '../../atoms/icon/icon.atom';
import { NavLinkMolecule } from '../../molecules/nav-link/nav-link.molecule';
import { NavbarOrganism } from './navbar.organism';
import { provideRouter, RouterLink } from '@angular/router';

describe('NavbarOrganism', () => {
  let component: NavbarOrganism;
  let fixture: ComponentFixture<NavbarOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IconAtom,
        NavbarOrganism,
        NavLinkMolecule
      ],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar navbarConfig como null por defecto', () => {
    expect(component.navbarConfig).toBeNull();
  });

  it('no debería renderizar contenido cuando navbarConfig es null', () => {
    const navbarElement = fixture.debugElement.query(By.css('header'));
    expect(navbarElement).toBeNull();
  });

  it('debería renderizar el Navbar cuando navbarConfig tiene valor', () => {
    component.navbarConfig = MOCK_NAVBAR_CONFIG;
    fixture.detectChanges();
    const navbarElement = fixture.debugElement.query(By.css('header'));
    expect(navbarElement).toBeTruthy();
  });

  it('debería renderizar el título del Navbar', () => {
    component.navbarConfig = MOCK_NAVBAR_CONFIG;
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h3'));
    expect(titleElement.nativeElement.textContent).toContain(MOCK_NAVBAR_CONFIG.title);
  });

  it('debería pasar la configuración del icono al IconAtom', () => {
    const { icon, size } = MOCK_NAVBAR_CONFIG.iconConfig;
    component.navbarConfig = MOCK_NAVBAR_CONFIG;
    fixture.detectChanges();
    const iconComponent = fixture.debugElement.query(By.css('dsb-icon-atom'));
    expect(iconComponent).toBeTruthy();
    expect(iconComponent.componentInstance.icon).toBe(icon);
    expect(iconComponent.componentInstance.size).toBe(size);
  });

  it('debería pasar los enlaces de navegación al NavLinkMolecule', () => {
    component.navbarConfig = MOCK_NAVBAR_CONFIG;
    fixture.detectChanges();
    const navLinksComponent = fixture.debugElement.query(By.css('dsb-nav-link-molecule'));
    expect(navLinksComponent).toBeTruthy();
    expect(navLinksComponent.componentInstance.navLinks)
      .toEqual(MOCK_NAVBAR_CONFIG.navLinks);
  });
});
