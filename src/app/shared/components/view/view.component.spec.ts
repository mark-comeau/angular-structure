import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsView } from './view.component';

describe('CsView', () => {
	let component: CsView;
	let fixture: ComponentFixture<CsView>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CsView]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CsView);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
