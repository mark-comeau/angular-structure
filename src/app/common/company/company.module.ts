import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyEditComponent } from './components/edit/company-edit.component';

@NgModule({
	imports: [
		SharedModule,
		CompanyRoutingModule
	],
	declarations: [CompanyEditComponent]
})
export class CompanyModule { }
