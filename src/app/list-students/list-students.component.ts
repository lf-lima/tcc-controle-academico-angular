import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student'
import { TokenPayload } from 'src/app/shared/models/tokenPayload'
import { StudentService } from 'src/app/shared/services/student.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {

  students!: Student[]
  tokenPayload!: TokenPayload

  constructor(
    private studentService: StudentService,
    private tokenService: TokenService
  ) {
    this.tokenPayload = this.tokenService.getTokenPayload()
  }

  ngOnInit(): void {
    this.studentService.getAllByInstitutionId().subscribe((response: any) => {
      const students = response.body as any[]

      this.students = students.map(student => {
        const documentNumber = student.user.documentNumber

        delete student.user

        return { ...student, documentNumber }
      })
    })
  }

  checkHasPermission (requiredPermission: string): boolean {
    const { permissions } = this.tokenPayload
    return !!permissions.find(permission => permission === requiredPermission)
  }
}
