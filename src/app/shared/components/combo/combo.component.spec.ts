import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsComboComponent } from './combo.component';

describe('CsComboComponent', () => {
  let component: CsComboComponent;
  let fixture: ComponentFixture<CsComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
