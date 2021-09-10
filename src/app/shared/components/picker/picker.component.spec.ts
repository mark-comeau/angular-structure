import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsPicker } from './picker.component';

describe('CsPicker', () => {
  let component: CsPicker;
  let fixture: ComponentFixture<CsPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsPicker ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsPicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
