import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarehousePickerComponent } from './warehouse-picker.component';

describe('WarehousePickerComponent', () => {
  let component: WarehousePickerComponent;
  let fixture: ComponentFixture<WarehousePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
