import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing.component';
import { SheetButtonComponent } from './projects/sheet-button/sheet-button.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutComponent,
    SheetButtonComponent,
    ProjectsComponent,
    ExperienceComponent,
    BlogsComponent,
    ContactComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
