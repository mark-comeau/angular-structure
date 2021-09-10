import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsGridComponent } from './grid.component';

describe('CsGridComponent', () => {
  let component: CsGridComponent;
  let fixture: ComponentFixture<CsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
