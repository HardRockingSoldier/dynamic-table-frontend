import { Component, OnInit } from '@angular/core';

import {
  DynamicTable,
  DynamicTableColumn,
  DynamicTableRow,
  DynamicTableRowEntry,
} from './dynamic-table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dynamicTableRowEntries: DynamicTableRowEntry[];

  ngOnInit(): void {
    this.dynamicTableRowEntries = [
      { id: 1, columnText: 'test1' },
      { id: 2, columnText: 'test2' },
      { id: 3, columnText: 'test3' },
      { id: 4, columnText: 'test4' },
    ];

    for (let i of this.dynamicTableRowEntries) {
      console.log(i.columnText);
    }
  }
}
