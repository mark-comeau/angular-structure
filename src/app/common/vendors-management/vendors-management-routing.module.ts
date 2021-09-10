import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsManagementComponent } from './vendors-management.component';

const routes: Routes = [
	{ path: '', component: VendorsManagementComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VendorRoutingModule { }
