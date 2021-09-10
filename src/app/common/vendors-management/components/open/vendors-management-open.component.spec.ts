import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendorsManagementOpenComponent } from './vendors-management-open.component';

describe('VendorsManagementOpenComponent', () => {
  let component: VendorsManagementOpenComponent;
  let fixture: ComponentFixture<VendorsManagementOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorsManagementOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsManagementOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
