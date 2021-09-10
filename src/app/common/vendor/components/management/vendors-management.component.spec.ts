import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendorsManagementComponent } from './vendors-management.component';

describe('VendorsManagementComponent', () => {
  let component: VendorsManagementComponent;
  let fixture: ComponentFixture<VendorsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
