import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from 'src/app/home/home.component'
import { ListCoursesComponent } from 'src/app/list-courses/list-courses.component'
import { ListInstitutionsComponent } from 'src/app/list-institutions/list-institutions.component'
import { ListProfessorsComponent } from 'src/app/list-professors/list-professors.component'
import { ListStudentsComponent } from 'src/app/list-students/list-students.component'
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
    path: 'institutions',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListInstitutionsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new',
        component: NewInstitutionComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'professors',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListProfessorsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new',
        component: NewProfessorComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'students',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListStudentsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new',
        component: NewStudentComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListCoursesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new',
        component: NewCourseComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'subjects',
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
