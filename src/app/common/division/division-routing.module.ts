import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionEditComponent } from './components/edit/division-edit.component';

const routes: Routes = [
	{ path: '', component: DivisionEditComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DivisionRoutingModule { }
