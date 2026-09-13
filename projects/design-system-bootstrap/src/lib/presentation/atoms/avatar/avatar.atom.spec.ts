import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_AVATAR_IMAGE_URL,
  MOCK_AVATAR_INITIALS,
  MOCK_AVATAR_SIZE,
  MOCK_AVATAR_THEMES,
} from '../../../mocks/avatar.mocks';
import { AvatarAtom } from './avatar.atom';

describe('AvatarAtom', () => {
  let component: AvatarAtom;
  let fixture: ComponentFixture<AvatarAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar con valores por defecto correctos', () => {
    expect(component.size).toBe(3);
    expect(component.theme).toBe('primary');
    expect(component.initials).toBe('');
    expect(component.imageUrl).toBeUndefined();
  });

  it('hasImage() debería retornar false si imageUrl no está definido o es cadena vacía', () => {
    expect(component.hasImage()).toBe(false);
    component.imageUrl = '   ';
    expect(component.hasImage()).toBe(false);
  });

  it('hasImage() debería retornar true si imageUrl tiene una URL válida', () => {
    component.imageUrl = MOCK_AVATAR_IMAGE_URL;
    expect(component.hasImage()).toBe(true);
  });

  it('debería renderizar un div con las iniciales cuando no hay imagen', () => {
    component.initials = MOCK_AVATAR_INITIALS;
    fixture.detectChanges();

    const initialsDiv = fixture.debugElement.query(By.css('div.rounded-circle'));
    const imgElement = fixture.debugElement.query(By.css('img'));

    expect(initialsDiv).toBeTruthy();
    expect(imgElement).toBeNull();
    expect(initialsDiv.nativeElement.textContent.trim()).toBe(MOCK_AVATAR_INITIALS);
  });

  it('debería aplicar la clase bg-{theme} y el contraste de texto correspondiente al tema', () => {
    MOCK_AVATAR_THEMES.forEach((theme) => {
      component.theme = theme;
      fixture.detectChanges();

      const initialsDiv = fixture.debugElement.query(By.css('div.rounded-circle'));
      expect(component.getBgClass()).toBe(`bg-${theme}`);
      expect(initialsDiv.nativeElement.classList.contains(`bg-${theme}`)).toBe(true);

      if (theme === 'light' || theme === 'warning' || theme === 'info') {
        expect(initialsDiv.nativeElement.classList.contains('text-dark')).toBe(true);
      } else {
        expect(initialsDiv.nativeElement.classList.contains('text-white')).toBe(true);
      }
    });
  });

  it('debería aplicar el tamaño configurado en rem al contenedor de iniciales', () => {
    component.size = MOCK_AVATAR_SIZE;
    fixture.detectChanges();

    const initialsDiv = fixture.debugElement.query(By.css('div.rounded-circle')).nativeElement as HTMLElement;
    expect(initialsDiv.style.width).toBe(`${MOCK_AVATAR_SIZE}rem`);
    expect(initialsDiv.style.height).toBe(`${MOCK_AVATAR_SIZE}rem`);
  });

  it('debería renderizar una etiqueta <img> con src y alt cuando imageUrl está presente', () => {
    component.imageUrl = MOCK_AVATAR_IMAGE_URL;
    component.initials = MOCK_AVATAR_INITIALS;
    component.size = 4;
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    const initialsDiv = fixture.debugElement.query(By.css('div.rounded-circle'));

    expect(imgElement).toBeTruthy();
    expect(initialsDiv).toBeNull();
    expect(imgElement.nativeElement.src).toContain(MOCK_AVATAR_IMAGE_URL);
    expect(imgElement.nativeElement.alt).toBe(MOCK_AVATAR_INITIALS);
    expect(imgElement.nativeElement.style.width).toBe('4rem');
    expect(imgElement.nativeElement.style.height).toBe('4rem');
  });
});
