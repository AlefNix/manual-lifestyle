import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarFichaComponent } from './enviar-ficha.component';

describe('EnviarFichaComponent', () => {
  let component: EnviarFichaComponent;
  let fixture: ComponentFixture<EnviarFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
