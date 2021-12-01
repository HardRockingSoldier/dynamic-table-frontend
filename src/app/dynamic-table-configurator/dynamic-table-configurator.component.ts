import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-dynamic-table-configurator',
  templateUrl: './dynamic-table-configurator.component.html',
  styleUrls: ['./dynamic-table-configurator.component.css'],
})
export class DynamicTableConfiguratorComponent implements OnInit {
  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  constructor() {}

  ngOnInit() {}
}
