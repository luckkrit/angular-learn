import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
})
export class EmploymentComponent implements OnInit {
  timeline = [
    {
      year: '2014 - 2019',
      content: 'Programmer',
    },
    {
      year: '2012 - 2014',
      content: 'Programmer',
    },
    {
      year: '2012 - 2013',
      content: 'Programmer',
    },
    {
      year: '2007 - 2008',
      content: 'Programmer',
    },
    {
      year: '2006',
      content: `Trainee`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
