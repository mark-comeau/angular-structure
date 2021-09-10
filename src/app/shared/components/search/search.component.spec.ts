import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsSearch } from './search.component';

describe('CsSearch', () => {
  let component: CsSearch;
  let fixture: ComponentFixture<CsSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsSearch ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
