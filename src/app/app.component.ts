import { Component, OnInit } from '@angular/core';

import { DynamicTable } from './dynamic-table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dynamicTable: DynamicTable = {
    id: 1,
    tableName: 'Meine erste Tabelle',
    dynamicTableColumns: [
      { id: 1, headerText: 'Spaltenüberschrift 1' },
      { id: 2, headerText: 'Spaltenüberschrift 2' },
      { id: 3, headerText: 'Erledigt?' },
    ],
    dynamicTableRows: [
      {
        id: 1,
        completed: false,
        dynamicTableRowEntries: [
          { id: 1, columnText: 'Eintrag 1' },
          { id: 2, columnText: 'Eintrag 2' },
        ],
      },
      {
        id: 2,
        completed: true,
        dynamicTableRowEntries: [
          { id: 3, columnText: 'Eintrag 3' },
          { id: 4, columnText: 'Eintrag 4' },
        ],
      },
      {
        id: 3,
        completed: undefined,
        dynamicTableRowEntries: [
          { id: 5, columnText: 'Eintrag 5' },
          { id: 6, columnText: 'Eintrag 6' },
        ],
      },
    ],
  };

  toggle(e: boolean) {
    console.log(this.dynamicTable.dynamicTableRows[0].completed);
  }

  ngOnInit(): void {}
}
