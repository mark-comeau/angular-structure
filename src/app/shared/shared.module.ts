import { NgModule } from '@angular/core';
import { CsButtonComponent } from './components/button/button.component';
import { CsComboComponent } from './components/combo/combo.component';
import { CsFilterGridComponent } from './components/filter-grid/filter-grid.component';
import { CsGridComponent } from './components/grid/grid.component';
import { CsPicker } from './components/picker/picker.component';
import { CsSearch } from './components/search/search.component';
import { CsTabsComponent } from './components/tabs/tabs.component';
import { CsView } from './components/view/view.component';

@NgModule({
	declarations: [
		CsButtonComponent,
		CsComboComponent,
		CsFilterGridComponent,
		CsGridComponent,
		CsPicker,
		CsSearch,
		CsTabsComponent,
		CsView
	],
	exports: [
		CsButtonComponent,
		CsComboComponent,
		CsFilterGridComponent,
		CsGridComponent,
		CsPicker,
		CsSearch,
		CsTabsComponent,
		CsView
	]
})
export class SharedModule { }
