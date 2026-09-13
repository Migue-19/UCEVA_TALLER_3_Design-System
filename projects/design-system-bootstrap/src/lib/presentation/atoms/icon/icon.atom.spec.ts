import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconAtom } from './icon.atom';

describe('IconAtom', () => {
  let component: IconAtom;
  let fixture: ComponentFixture<IconAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconAtom, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar un elemento <i>', () => {
    component.icon = 'apple';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement).toBeTruthy();
  });

  it('debería tener la clase base "bi"', () => {
    component.icon = 'apple';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.classList).toContain('bi');
  });

  it('debería aplicar la clase dinámica según el icon', () => {
    component.icon = 'apple';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.classList).toContain('bi-apple');
  });

  it('debería actualizar la clase cuando cambia el icon', () => {
    component.icon = 'apple';
    fixture.detectChanges();

    let iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.classList).toContain('bi-apple');

    component.icon = 'archive';
    fixture.detectChanges();

    iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.classList).toContain('bi-archive');
  });

  it('debería aplicar el tamaño por defecto (1rem)', () => {
    component.icon = 'apple';
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.style.fontSize).toBe('1rem');
  });

  it('debería aplicar el tamaño personalizado cuando size cambia', () => {
    component.icon = 'apple';
    component.size = 2;
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.style.fontSize).toBe('2rem');
  });

  it('debería actualizar el tamaño cuando cambia el input size', () => {
    component.icon = 'apple';
    component.size = 1.5;
    fixture.detectChanges();

    let iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.style.fontSize).toBe('1.5rem');

    component.size = 0.75;
    fixture.detectChanges();

    iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.style.fontSize).toBe('0.75rem');
  });

});
