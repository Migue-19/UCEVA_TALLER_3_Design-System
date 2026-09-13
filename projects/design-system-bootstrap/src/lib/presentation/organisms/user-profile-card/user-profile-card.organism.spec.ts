import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_USER_PROFILE_CARD,
  MOCK_USER_PROFILE_CARD_INITIALS,
} from '../../../mocks/user-profile-card.mocks';
import { ButtonGroupMolecule } from '../../molecules/button-group/button-group.molecule';
import { FormFieldMolecule } from '../../molecules/form-field/form-field.molecule';
import { UserInfoMolecule } from '../../molecules/user-info/user-info.molecule';
import { UserProfileCardOrganism } from './user-profile-card.organism';

describe('UserProfileCardOrganism', () => {
  let component: UserProfileCardOrganism;
  let fixture: ComponentFixture<UserProfileCardOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserProfileCardOrganism,
        UserInfoMolecule,
        FormFieldMolecule,
        ButtonGroupMolecule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileCardOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('no debería renderizar la tarjeta si config no está definido', () => {
    const cardElement = fixture.debugElement.query(By.css('.dsb-user-profile-card'));
    expect(cardElement).toBeNull();
  });

  it('debería renderizar la estructura completa de la tarjeta cuando config está definido', () => {
    component.config = MOCK_USER_PROFILE_CARD;
    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(By.css('.dsb-user-profile-card'));
    const userInfo = fixture.debugElement.query(By.css('dsb-user-info-molecule'));
    const formField = fixture.debugElement.query(By.css('dsb-form-field-molecule'));
    const buttonGroup = fixture.debugElement.query(By.css('dsb-button-group-molecule'));

    expect(cardElement).toBeTruthy();
    expect(userInfo).toBeTruthy();
    expect(formField).toBeTruthy();
    expect(buttonGroup).toBeTruthy();
  });

  it('debería pasar correctamente las propiedades de configuración a los componentes hijos', () => {
    component.config = MOCK_USER_PROFILE_CARD;
    fixture.detectChanges();

    const userInfo = fixture.debugElement.query(By.css('dsb-user-info-molecule'))
      .componentInstance as UserInfoMolecule;
    const formField = fixture.debugElement.query(By.css('dsb-form-field-molecule'))
      .componentInstance as FormFieldMolecule;
    const buttonGroup = fixture.debugElement.query(By.css('dsb-button-group-molecule'))
      .componentInstance as ButtonGroupMolecule;

    expect(userInfo.config).toEqual(MOCK_USER_PROFILE_CARD.userInfo);
    expect(formField.config).toEqual(MOCK_USER_PROFILE_CARD.emailField);
    expect(buttonGroup.buttonsGroupData).toEqual(MOCK_USER_PROFILE_CARD.actions);
  });

  it('debería actualizar currentEmailValue cuando FormFieldMolecule emite valueChange', () => {
    component.config = MOCK_USER_PROFILE_CARD;
    fixture.detectChanges();

    const formField = fixture.debugElement.query(By.css('dsb-form-field-molecule'));
    formField.componentInstance.valueChange.emit('nuevo.correo@uceva.edu.co');

    expect(component.currentEmailValue).toBe('nuevo.correo@uceva.edu.co');
  });

  it('debería emitir save con el nuevo valor cuando se pulsa el botón guardar', () => {
    component.config = MOCK_USER_PROFILE_CARD;
    component.currentEmailValue = 'actualizado@uceva.edu.co';
    fixture.detectChanges();

    const saveSpy = jest.spyOn(component.save, 'emit');
    component.onActionClick('btn-save');

    expect(saveSpy).toHaveBeenCalledWith('actualizado@uceva.edu.co');
  });

  it('debería emitir save con el valor por defecto si currentEmailValue está vacío', () => {
    component.config = MOCK_USER_PROFILE_CARD;
    component.currentEmailValue = '';
    fixture.detectChanges();

    const saveSpy = jest.spyOn(component.save, 'emit');
    component.onActionClick('guardar-datos');

    expect(saveSpy).toHaveBeenCalledWith(MOCK_USER_PROFILE_CARD.emailField.value);
  });

  it('debería emitir save con string vacío si ni currentEmailValue ni emailField tienen valor', () => {
    component.config = { ...MOCK_USER_PROFILE_CARD, emailField: undefined as any };
    component.currentEmailValue = '';
    fixture.detectChanges();

    const saveSpy = jest.spyOn(component.save, 'emit');
    component.onActionClick('guardar-datos');

    expect(saveSpy).toHaveBeenCalledWith('');
  });

  it('debería emitir cancel cuando se pulsa el botón cancelar', () => {

    component.config = MOCK_USER_PROFILE_CARD;
    fixture.detectChanges();

    const cancelSpy = jest.spyOn(component.cancel, 'emit');
    component.onActionClick('btn-cancel');

    expect(cancelSpy).toHaveBeenCalled();
  });

  it('no debería emitir save ni cancel cuando se pulsa un botón desconocido', () => {
    component.config = MOCK_USER_PROFILE_CARD;
    fixture.detectChanges();

    const saveSpy = jest.spyOn(component.save, 'emit');
    const cancelSpy = jest.spyOn(component.cancel, 'emit');

    component.onActionClick('btn-otro');

    expect(saveSpy).not.toHaveBeenCalled();
    expect(cancelSpy).not.toHaveBeenCalled();
  });
});
