import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTemaComponent } from './novo-tema.component';

describe('NovoTemaComponent', () => {
  let component: NovoTemaComponent;
  let fixture: ComponentFixture<NovoTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
