import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/shared/models/subject'
import { SubjectService } from 'src/app/shared/services/subject.service'

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.scss']
})
export class ListSubjectComponent implements OnInit {

  subjects!: Subject[]

  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe((response: any) => { this.subjects = response.body })
  }
}
