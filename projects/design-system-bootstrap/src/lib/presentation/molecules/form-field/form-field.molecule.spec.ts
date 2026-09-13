import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_FORM_FIELD_DISABLED,
  MOCK_FORM_FIELD_ERROR,
  MOCK_FORM_FIELD_NORMAL,
} from '../../../mocks/form-field.mocks';
import { InputAtom } from '../../atoms/input/input.atom';
import { FormFieldMolecule } from './form-field.molecule';

describe('FormFieldMolecule', () => {
  let component: FormFieldMolecule;
  let fixture: ComponentFixture<FormFieldMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldMolecule, InputAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('no debería renderizar elementos si config no está definido', () => {
    const label = fixture.debugElement.query(By.css('label'));
    const input = fixture.debugElement.query(By.css('dsb-input-atom'));
    expect(label).toBeNull();
    expect(input).toBeNull();
  });

  it('debería renderizar la etiqueta y asociarla por el atributo "for"', () => {
    component.config = MOCK_FORM_FIELD_NORMAL;
    fixture.detectChanges();

    const label = fixture.debugElement.query(By.css('label'));
    expect(label).toBeTruthy();
    expect(label.nativeElement.textContent.trim()).toBe(MOCK_FORM_FIELD_NORMAL.label);
    expect(label.nativeElement.getAttribute('for')).toBe(MOCK_FORM_FIELD_NORMAL.idInput);
  });

  it('debería renderizar InputAtom con las propiedades de config', () => {
    component.config = MOCK_FORM_FIELD_NORMAL;
    fixture.detectChanges();

    const inputDebug = fixture.debugElement.query(By.css('dsb-input-atom'));
    expect(inputDebug).toBeTruthy();

    const inputInstance = inputDebug.componentInstance as InputAtom;
    expect(inputInstance.idInput).toBe(MOCK_FORM_FIELD_NORMAL.idInput);
    expect(inputInstance.type).toBe(MOCK_FORM_FIELD_NORMAL.type);
    expect(inputInstance.placeholder).toBe(MOCK_FORM_FIELD_NORMAL.placeholder);
    expect(inputInstance.value).toBe(MOCK_FORM_FIELD_NORMAL.value);
    expect(inputInstance.disabled).toBe(false);
  });

  it('debería renderizar el texto de ayuda cuando hasError es false y helperText existe', () => {
    component.config = MOCK_FORM_FIELD_NORMAL;
    fixture.detectChanges();

    const helper = fixture.debugElement.query(By.css('.dsb-form-field-helper'));
    const error = fixture.debugElement.query(By.css('.dsb-form-field-error'));

    expect(helper).toBeTruthy();
    expect(error).toBeNull();
    expect(helper.nativeElement.textContent.trim()).toBe(MOCK_FORM_FIELD_NORMAL.helperText);
  });

  it('debería renderizar el texto de error cuando hasError es true y errorText existe', () => {
    component.config = MOCK_FORM_FIELD_ERROR;
    fixture.detectChanges();

    const error = fixture.debugElement.query(By.css('.dsb-form-field-error'));
    const helper = fixture.debugElement.query(By.css('.dsb-form-field-helper'));

    expect(error).toBeTruthy();
    expect(helper).toBeNull();
    expect(error.nativeElement.textContent.trim()).toBe(MOCK_FORM_FIELD_ERROR.errorText);
  });

  it('debería configurar disabled en el InputAtom si config.disabled es true', () => {
    component.config = MOCK_FORM_FIELD_DISABLED;
    fixture.detectChanges();

    const inputInstance = fixture.debugElement.query(By.css('dsb-input-atom'))
      .componentInstance as InputAtom;
    expect(inputInstance.disabled).toBe(true);
  });

  it('debería emitir valueChange cuando InputAtom emite un nuevo valor', () => {
    component.config = MOCK_FORM_FIELD_NORMAL;
    fixture.detectChanges();

    const spy = jest.spyOn(component.valueChange, 'emit');
    const inputDebug = fixture.debugElement.query(By.css('dsb-input-atom'));

    inputDebug.componentInstance.valueChange.emit('nuevo-valor-emitido');

    expect(spy).toHaveBeenCalledWith('nuevo-valor-emitido');
  });

  it('onValueChange() debería emitir el valor recibido', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    component.onValueChange('prueba-directa');
    expect(spy).toHaveBeenCalledWith('prueba-directa');
  });
});
