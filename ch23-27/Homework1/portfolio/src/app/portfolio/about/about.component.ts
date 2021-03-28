import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutMe: any = {
    firstName: 'Krit Chomaitong',
    location: 'Thailand',
    job: 'Programmer',
  };
  constructor() {}

  ngOnInit(): void {}
}
