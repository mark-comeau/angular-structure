import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsTabsComponent } from './tabs.component';

describe('CsTabsComponent', () => {
  let component: CsTabsComponent;
  let fixture: ComponentFixture<CsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
