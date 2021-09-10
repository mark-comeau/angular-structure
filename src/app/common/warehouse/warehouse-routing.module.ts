import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseEditComponent } from './components/edit/warehouse-edit.component';

const routes: Routes = [
	{ path: '', component: WarehouseEditComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WarehouseRoutingModule { }
