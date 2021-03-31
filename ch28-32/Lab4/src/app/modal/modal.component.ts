import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input()
  isShow: boolean;
  @Input()
  title: string;
  constructor() {}
  onHide(): void {
    this.isShow = false;
  }
  ngOnInit(): void {}
}
