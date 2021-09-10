import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerEditComponent } from './components/edit/customer-edit.component';
import { CustomersManagementComponent } from './components/management/customers-management.component';

const routes: Routes = [
	{ path: '', component: CustomerEditComponent },
	{ path: 'new', component: CustomerEditComponent },
	{ path: 'edit/:id', component: CustomerEditComponent },
	{ path: 'management', component: CustomersManagementComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CustomerRoutingModule { }
