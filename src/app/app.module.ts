import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './login/login.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { SidebarComponent } from './sidebar/sidebar.component'
import { HomeComponent } from './home/home.component';
import { NewInstitutionComponent } from './new-institution/new-institution.component';
import { NewProfessorComponent } from './new-professor/new-professor.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { NewSubjectComponent } from './new-subject/new-subject.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
    NewInstitutionComponent,
    NewProfessorComponent,
    NewStudentComponent,
    NewCourseComponent,
    NewSubjectComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
