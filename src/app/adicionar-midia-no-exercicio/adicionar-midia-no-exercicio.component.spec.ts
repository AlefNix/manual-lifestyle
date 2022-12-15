import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarMidiaNoExercicioComponent } from './adicionar-midia-no-exercicio.component';

describe('AdicionarMidiaNoExercicioComponent', () => {
  let component: AdicionarMidiaNoExercicioComponent;
  let fixture: ComponentFixture<AdicionarMidiaNoExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarMidiaNoExercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarMidiaNoExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
