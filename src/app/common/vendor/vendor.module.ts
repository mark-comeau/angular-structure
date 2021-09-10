import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorEditComponent } from './components/edit/vendor-edit.component';
import { VendorsManagementComponent } from './components/management/vendors-management.component';

@NgModule({
	imports: [
		SharedModule,
		VendorRoutingModule
	],
	declarations: [VendorEditComponent, VendorsManagementComponent]
})
export class VendorModule { }
