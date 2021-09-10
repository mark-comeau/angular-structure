import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsButtonComponent } from './button.component';

describe('CsButtonComponent', () => {
  let component: CsButtonComponent;
  let fixture: ComponentFixture<CsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
