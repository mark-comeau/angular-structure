import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DivisionRoutingModule } from './division-routing.module';
import { DivisionEditComponent } from './components/edit/division-edit.component';

@NgModule({
	imports: [
		SharedModule,
		DivisionRoutingModule
	],
	declarations: [DivisionEditComponent]
})
export class DivisionModule { }
