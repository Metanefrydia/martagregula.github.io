import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WelcomeSectionComponent } from './layout/welcome-section/welcome-section.component';
import { SkillSectionComponent } from './layout/skill-section/skill-section.component';
import { ContactSectionComponent } from './layout/contact-section/contact-section.component';
import { ProjectSectionComponent } from './layout/project-section/project-section.component';
import { ProjectCardComponent } from './layout/project-section/project-card/project-card.component';
import { TrimPipe } from './shared/pipes/trim.pipe';
import { DividerComponent } from './layout/divider/divider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeSectionComponent,
    SkillSectionComponent,
    ContactSectionComponent,
    ProjectSectionComponent,
    ProjectCardComponent,
    TrimPipe,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
