import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student'
import { StudentService } from 'src/app/shared/services/student.service'

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {

  students!: Student[]

  constructor(
    private studentService: StudentService
  ) { }

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
}
