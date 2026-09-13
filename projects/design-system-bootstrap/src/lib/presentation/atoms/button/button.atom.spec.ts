import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_BUTTON_ID, MOCK_BUTTON_TEXT, MOCK_BUTTON_TYPES } from '../../../mocks/button.mocks';
import { ButtonAtom } from './button.atom';

describe('ButtonAtom', () => {
  let component: ButtonAtom;
  let fixture: ComponentFixture<ButtonAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia agregar el text al Button', () => {
    component.text = MOCK_BUTTON_TEXT;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent).toContain(MOCK_BUTTON_TEXT);
  });

  it('Deberia agregar el type al Button', () => {
    MOCK_BUTTON_TYPES.forEach(type => {
      component.type = type;
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('button'));
      expect(button.nativeElement.className).toContain(`btn-${type}`);
    });
  });

  it('Deberia retorna las clases el metodo getClass()', () => {
    MOCK_BUTTON_TYPES.forEach(type => {
      component.type = type;
      fixture.detectChanges();
      expect(component.getClass()).toContain(`btn-${type}`);
    });
  });

  it('Debería emitir el idButton cuando se hace click', () => {
    component.idButton = MOCK_BUTTON_ID;
    const spy = jest.spyOn(component.clicker, 'emit');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(spy).toHaveBeenCalledWith(MOCK_BUTTON_ID);
  });

});
