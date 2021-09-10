import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendorPickerComponent } from './vendor-picker.component';

describe('VendorPickerComponent', () => {
  let component: VendorPickerComponent;
  let fixture: ComponentFixture<VendorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
