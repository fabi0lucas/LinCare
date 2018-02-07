import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCepComponent } from './comp-cep.component';

describe('CompCepComponent', () => {
  let component: CompCepComponent;
  let fixture: ComponentFixture<CompCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
