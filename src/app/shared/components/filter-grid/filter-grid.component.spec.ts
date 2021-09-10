import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsFilterGridComponent } from './filter-grid.component';

describe('CsFilterGridComponent', () => {
  let component: CsFilterGridComponent;
  let fixture: ComponentFixture<CsFilterGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsFilterGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFilterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
