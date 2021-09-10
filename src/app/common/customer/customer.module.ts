import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerEditComponent } from './components/edit/customer-edit.component';
import { CustomersManagementComponent } from './components/management/customers-management.component';

@NgModule({
	imports: [
		SharedModule,
		CustomerRoutingModule
	],
	declarations: [CustomerEditComponent, CustomersManagementComponent]
})
export class CustomerModule { }
