import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutMe: any = {
    firstName: '',
    location: '',
    job: '',
  };
  constructor(private portfolioService: PortfolioService) {
    this.aboutMe = this.portfolioService.getAboutMe();
  }

  ngOnInit(): void {}
}
