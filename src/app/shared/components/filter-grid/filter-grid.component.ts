import { Component, OnInit } from '@angular/core';
import { CsGridComponent } from '../grid/grid.component';

@Component({
  selector: 'cs-filter-grid',
  templateUrl: './filter-grid.component.html',
  styleUrls: ['./filter-grid.component.scss']
})
export class CsFilterGridComponent extends CsGridComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
