import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  speed: number;
  constructor() {
    this.speed = 0;
  }

  ngOnInit(): void {
  }

  increase(): void {
    this.speed += 50;
  }
  decrease(): void {
    this.speed -= 50;
  }
}
