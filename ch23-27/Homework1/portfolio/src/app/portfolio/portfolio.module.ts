import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';



@NgModule({
  declarations: [PortfolioComponent, NavbarComponent, AboutComponent, EducationComponent, EmploymentComponent],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
