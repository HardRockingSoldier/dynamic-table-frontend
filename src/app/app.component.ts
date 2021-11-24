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
    this.dynamicTableRowEntries.push({
      id: 1,
      columnText: '',
    });

    for (let i of this.dynamicTableRowEntries) {
      console.log(i.columnText);
    }
  }
}
