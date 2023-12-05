import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulaPruebaComponent } from './modula-prueba.component';

describe('ModulaPruebaComponent', () => {
  let component: ModulaPruebaComponent;
  let fixture: ComponentFixture<ModulaPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulaPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
