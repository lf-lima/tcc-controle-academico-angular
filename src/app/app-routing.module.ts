import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from 'src/app/home/home.component'
import { LoginComponent } from 'src/app/login/login.component'
import { NewInstitutionComponent } from 'src/app/new-institution/new-institution.component'
import { NewProfessorComponent } from 'src/app/new-professor/new-professor.component'
import { AuthGuard } from 'src/app/shared/services/authGuard.service'

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
    children: [
      {
        path: 'new',
        component: NewInstitutionComponent
      }
    ]
  },
  {
    path: 'professor',
    children: [
      {
        path: 'new',
        component: NewProfessorComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
