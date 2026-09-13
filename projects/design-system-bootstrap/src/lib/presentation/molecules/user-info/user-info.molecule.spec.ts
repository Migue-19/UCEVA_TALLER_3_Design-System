import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_USER_INFO_DESIGNER,
  MOCK_USER_INFO_INITIALS,
  MOCK_USER_INFO_WITH_IMAGE,
} from '../../../mocks/user-info.mocks';
import { AvatarAtom } from '../../atoms/avatar/avatar.atom';
import { BadgeAtom } from '../../atoms/badge/badge.atom';
import { UserInfoMolecule } from './user-info.molecule';

describe('UserInfoMolecule', () => {
  let component: UserInfoMolecule;
  let fixture: ComponentFixture<UserInfoMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInfoMolecule, AvatarAtom, BadgeAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(UserInfoMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('no debería renderizar contenido si config no está definido', () => {
    const container = fixture.debugElement.query(By.css('.dsb-user-name'));
    expect(container).toBeNull();
  });

  it('debería renderizar el nombre de usuario', () => {
    component.config = MOCK_USER_INFO_WITH_IMAGE;
    fixture.detectChanges();

    const nameElement = fixture.debugElement.query(By.css('.dsb-user-name'));
    expect(nameElement).toBeTruthy();
    expect(nameElement.nativeElement.textContent.trim()).toBe(MOCK_USER_INFO_WITH_IMAGE.name);
  });

  it('debería pasar los datos del usuario a AvatarAtom', () => {
    component.config = MOCK_USER_INFO_WITH_IMAGE;
    fixture.detectChanges();

    const avatarDebug = fixture.debugElement.query(By.css('dsb-avatar-atom'));
    expect(avatarDebug).toBeTruthy();

    const avatarInstance = avatarDebug.componentInstance as AvatarAtom;
    expect(avatarInstance.imageUrl).toBe(MOCK_USER_INFO_WITH_IMAGE.imageUrl);
    expect(avatarInstance.initials).toBe(MOCK_USER_INFO_WITH_IMAGE.initials);
  });

  it('debería configurar correctamente BadgeAtom con el rol del usuario', () => {
    component.config = MOCK_USER_INFO_INITIALS;
    fixture.detectChanges();

    const badgeDebug = fixture.debugElement.query(By.css('dsb-badge-atom'));
    expect(badgeDebug).toBeTruthy();

    const badgeInstance = badgeDebug.componentInstance as BadgeAtom;
    expect(badgeInstance.text).toBe(MOCK_USER_INFO_INITIALS.role);
    expect(badgeInstance.type).toBe(MOCK_USER_INFO_INITIALS.roleTheme);
    expect(badgeInstance.typeText).toBe('text-white');
  });

  it('getBadgeTextClass() debería retornar "text-dark" para temas claros y "text-white" para oscuros', () => {
    component.config = { ...MOCK_USER_INFO_DESIGNER, roleTheme: 'warning' };
    expect(component.getBadgeTextClass()).toBe('text-dark');

    component.config.roleTheme = 'light';
    expect(component.getBadgeTextClass()).toBe('text-dark');

    component.config.roleTheme = 'info';
    expect(component.getBadgeTextClass()).toBe('text-dark');

    component.config.roleTheme = 'primary';
    expect(component.getBadgeTextClass()).toBe('text-white');

    component.config.roleTheme = 'danger';
    expect(component.getBadgeTextClass()).toBe('text-white');
  });

  it('getBadgeTextClass() debería retornar "text-white" si config no está definido', () => {
    component.config = undefined as any;
    expect(component.getBadgeTextClass()).toBe('text-white');
  });
});
