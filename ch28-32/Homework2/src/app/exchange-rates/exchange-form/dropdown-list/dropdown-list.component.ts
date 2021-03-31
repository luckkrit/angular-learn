import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css'],
})
export class DropdownListComponent implements OnInit {
  @Input()
  values: string[];
  show: boolean;
  @Input()
  value = '';
  @Output()
  OnSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  OnChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectedDropdown(data: string): void {
    this.OnSelected.emit(data);
    this.value = data;
    this.show = false;
  }

  showDropdown(): void {
    this.show = true;
  }

  onChange(): void {
    this.OnChanged.emit(this.value);
  }
}
