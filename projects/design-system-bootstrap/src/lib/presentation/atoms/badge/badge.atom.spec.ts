import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_BADGE_TEXT, MOCK_BADGE_TYPE, MOCK_BADGE_TYPE_DEFAULT, MOCK_BADGE_TYPE_TEXT, MOCK_BADGE_TYPE_TEXT_DEFAULT, MOCK_BADGE_TYPES, MOCK_BADGE_TYPES_TEXT } from '../../../mocks/badge.mocks';
import { BadgeAtom } from './badge.atom';

describe('BadgeAtom', () => {
  let component: BadgeAtom;
  let fixture: ComponentFixture<BadgeAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el texto del badge', () => {
    component.text = MOCK_BADGE_TEXT;
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.textContent).toBe(MOCK_BADGE_TEXT);
  });

  it('debería aplicar las clases según type y typeText', () => {
    component.type = MOCK_BADGE_TYPE;
    component.typeText = 'text-dark';
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    const classes = span.nativeElement.className;
    expect(classes).toContain(`bg-${MOCK_BADGE_TYPE}`);
    expect(classes).toContain(MOCK_BADGE_TYPE_TEXT);
  });

  it('getClass debería retornar las clases correctas', () => {
    component.type = MOCK_BADGE_TYPE;
    component.typeText = MOCK_BADGE_TYPE_TEXT;
    const result = component.getClass();
    expect(result).toBe(`bg-${MOCK_BADGE_TYPE} ${MOCK_BADGE_TYPE_TEXT}`);
  });

  it('debería usar valores por defecto si no se pasan inputs', () => {
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    const classes = span.nativeElement.className;
    expect(classes).toContain(`bg-${MOCK_BADGE_TYPE_DEFAULT}`);
    expect(classes).toContain(MOCK_BADGE_TYPE_TEXT_DEFAULT);
  });

  it('debería generar clases correctas para múltiples combinaciones', () => {
    MOCK_BADGE_TYPES.forEach(type => {
      MOCK_BADGE_TYPES_TEXT.forEach(typeText => {
        component.type = type;
        component.typeText = typeText;
        fixture.detectChanges();
        expect(component.getClass()).toBe(`bg-${type} ${typeText}`);
      });
    });
  });

});