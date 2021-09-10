import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseEditComponent } from './components/edit/warehouse-edit.component';

@NgModule({
	imports: [
		SharedModule,
		WarehouseRoutingModule
	],
	declarations: [WarehouseEditComponent]
})
export class WarehouseModule { }
