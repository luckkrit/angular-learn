import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu = [
    { title: 'About', path: '/about' },
    { title: 'Education', path: '/education' },
    { title: 'Employment', path: '/employment' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
