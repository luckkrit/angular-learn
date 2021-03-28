import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      year: '2011',
      content: 'Master Degree',
    },
    {
      year: '2007',
      content: 'Bachelor Degree',
    },
    {
      year: '2006',
      content: 'Microsoft Certified Application Developer',
    },
    {
      year: '2006',
      content: 'Microsoft Certified Professional for Microsoft.NET',
    },
    {
      year: '2005',
      content: `Sun's JAVA 1.4 Programmer`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
