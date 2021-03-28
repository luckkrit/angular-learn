import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}
  getAboutMe(): any {
    return {
      firstName: 'Krit Chomaitong',
      location: 'Thailand',
      job: 'Programmer',
    };
  }
  getEducation(): any[] {
    return [
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
  }
  getEmployment(): any[] {
    return [
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
  }
}
