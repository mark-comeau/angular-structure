import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsWizard } from './wizard.component';

describe('CsWizard', () => {
	let component: CsWizard;
	let fixture: ComponentFixture<CsWizard>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CsWizard]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CsWizard);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
