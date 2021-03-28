import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioService } from './service/portfolio.service';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'employment',
    component: EmploymentComponent,
  },
];

@NgModule({
  declarations: [
    PortfolioComponent,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    EmploymentComponent,
    MainComponent,
  ],
  providers: [PortfolioService],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [PortfolioComponent, RouterModule],
})
export class PortfolioModule {}
