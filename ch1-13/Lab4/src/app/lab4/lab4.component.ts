import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component implements OnInit {

  numbers: number[];
  constructor() {
    this.numbers = [...new Array(10)].map((v, i) => i + 1);
  }

  ngOnInit(): void {
  }

}
