import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  timeline = [];
  constructor(private portfolioService: PortfolioService) {
    this.timeline = this.portfolioService.getEducation();
  }

  ngOnInit(): void {}
}
