import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorEditComponent } from './components/edit/vendor-edit.component';
import { VendorsManagementComponent } from './components/management/vendors-management.component';

const routes: Routes = [
	{ path: '', component: VendorEditComponent },
	{ path: 'new', component: VendorEditComponent },
	{ path: 'edit/:id', component: VendorEditComponent },
	{ path: 'management', component: VendorsManagementComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VendorRoutingModule { }
