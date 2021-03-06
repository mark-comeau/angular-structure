import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarehouseSearchComponent } from './warehouse-search.component';

describe('WarehouseSearchComponent', () => {
  let component: WarehouseSearchComponent;
  let fixture: ComponentFixture<WarehouseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
