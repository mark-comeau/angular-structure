import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { VendorRoutingModule } from './vendors-management-routing.module';
import { VendorsManagementComponent } from './vendors-management.component';

@NgModule({
	imports: [
		SharedModule,
		VendorRoutingModule
	],
	declarations: [VendorsManagementComponent]
})
export class VendorModule { }
