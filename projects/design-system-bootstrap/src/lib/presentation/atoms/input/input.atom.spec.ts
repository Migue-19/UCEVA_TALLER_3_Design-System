import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_INPUT_ID,
  MOCK_INPUT_PLACEHOLDER,
  MOCK_INPUT_TYPES,
  MOCK_INPUT_VALUE,
} from '../../../mocks/input.mocks';
import { InputAtom } from './input.atom';

describe('InputAtom', () => {
  let component: InputAtom;
  let fixture: ComponentFixture<InputAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar con valores por defecto correctos', () => {
    expect(component.value).toBe('');
    expect(component.placeholder).toBe('');
    expect(component.type).toBe('text');
    expect(component.idInput).toBe('');
    expect(component.disabled).toBe(false);
  });

  it('debería renderizar un elemento input con la clase "form-control"', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    expect(inputElement).toBeTruthy();
    expect(inputElement.nativeElement.classList.contains('form-control')).toBe(true);
  });

  it('debería enlazar idInput, placeholder y disabled correctamente', () => {
    component.idInput = MOCK_INPUT_ID;
    component.placeholder = MOCK_INPUT_PLACEHOLDER;
    component.disabled = true;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    expect(input.id).toBe(MOCK_INPUT_ID);
    expect(input.placeholder).toBe(MOCK_INPUT_PLACEHOLDER);
    expect(input.disabled).toBe(true);
  });

  it('debería soportar diferentes tipos de entrada (type)', () => {
    MOCK_INPUT_TYPES.forEach((type) => {
      component.type = type;
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
      expect(input.type).toBe(type);
    });
  });

  it('debería reflejar el valor asignado al componente', () => {
    component.value = MOCK_INPUT_VALUE;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    expect(input.value).toBe(MOCK_INPUT_VALUE);
  });

  it('debería actualizar value y emitir valueChange cuando el usuario escribe en el input', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    const input = fixture.debugElement.query(By.css('input'));

    input.nativeElement.value = 'nuevo-texto@uceva.edu.co';
    input.nativeElement.dispatchEvent(new Event('input'));

    expect(component.value).toBe('nuevo-texto@uceva.edu.co');
    expect(spy).toHaveBeenCalledWith('nuevo-texto@uceva.edu.co');
  });
});
