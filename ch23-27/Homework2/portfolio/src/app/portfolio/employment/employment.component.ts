import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
})
export class EmploymentComponent implements OnInit {
  timeline = [];
  constructor(private portfolioService: PortfolioService) {
    this.timeline = this.portfolioService.getEmployment();
  }

  ngOnInit(): void {}
}
