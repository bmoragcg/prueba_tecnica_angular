import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaTipicaComponent } from './comida-tipica.component';

describe('ComidaTipicaComponent', () => {
  let component: ComidaTipicaComponent;
  let fixture: ComponentFixture<ComidaTipicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaTipicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaTipicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
