import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyEditComponent } from './components/edit/company-edit.component';

const routes: Routes = [
	{ path: '', component: CompanyEditComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CompanyRoutingModule { }
