import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerAtom } from './container-atom';
import { By } from '@angular/platform-browser';
import { MOCK_TITLE, MOCK_TITLE_UPDATE } from '../../../mocks/container.mocks';

describe('ContainerAtom', () => {
  let component: ContainerAtom;
  let fixture: ComponentFixture<ContainerAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el título como string vacío por defecto', () => {
    expect(component.title).toBe('');
  });

  it('debería renderizar el título cuando se proporciona', () => {
    component.title = MOCK_TITLE;
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent).toContain(MOCK_TITLE);
  });

  it('debería actualizar el título cuando cambia el input', () => {
    component.title = MOCK_TITLE;
    fixture.detectChanges();

    let titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toContain(MOCK_TITLE);

    component.title = MOCK_TITLE_UPDATE;
    fixture.detectChanges();

    titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toContain(MOCK_TITLE_UPDATE);
  });

  it('debería renderizar el contenedor principal', () => {
    const containerElement = fixture.debugElement.query(By.css('section'));
    expect(containerElement).toBeTruthy();
  });
});
