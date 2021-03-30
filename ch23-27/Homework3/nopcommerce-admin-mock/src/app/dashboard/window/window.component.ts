import { Component, Input, OnInit } from '@angular/core';
import { faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
})
export class WindowComponent implements OnInit {
  panelOpenState = false;
  @Input()
  title: string;
  @Input()
  icon: IconDefinition;
  @Input()
  showDelete: boolean;
  faMinus = faMinus;
  faTimes = faTimes;

  isDelete: boolean;

  constructor() {}
  ngOnInit(): void {}

  onDestroy() {
    this.isDelete = true;
  }
}
