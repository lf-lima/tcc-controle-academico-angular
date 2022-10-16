import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course'
import { TokenPayload } from 'src/app/shared/models/tokenPayload'
import { CourseService } from 'src/app/shared/services/course.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  courses!: Course[]
  tokenPayload!: TokenPayload

  constructor(
    private courseService: CourseService,
    private tokenService: TokenService
  ) {
    this.tokenPayload = this.tokenService.getTokenPayload()
  }

  ngOnInit(): void {
    this.courseService.getAllByInstitutionId().subscribe((response: any) => { this.courses = response.body })
  }

  checkHasPermission (requiredPermission: string): boolean {
    const { permissions } = this.tokenPayload
    return !!permissions.find(permission => permission === requiredPermission)
  }
}
