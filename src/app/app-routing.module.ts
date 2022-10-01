import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from 'src/app/home/home.component'
import { ListSubjectComponent } from 'src/app/list-subject/list-subject.component'
import { LoginComponent } from 'src/app/login/login.component'
import { NewCourseComponent } from 'src/app/new-course/new-course.component'
import { NewInstitutionComponent } from 'src/app/new-institution/new-institution.component'
import { NewProfessorComponent } from 'src/app/new-professor/new-professor.component'
import { NewStudentComponent } from 'src/app/new-student/new-student.component'
import { NewSubjectComponent } from 'src/app/new-subject/new-subject.component'
import { AuthGuard } from 'src/app/shared/services/authGuard.service'
import { ShowSubjectComponent } from 'src/app/show-subject/show-subject.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'institution',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: NewInstitutionComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'professor',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: NewProfessorComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'student',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: NewStudentComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'course',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: NewCourseComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'subject',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListSubjectComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new',
        pathMatch: 'full',
        component: NewSubjectComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':subjectId',
        component: ShowSubjectComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
