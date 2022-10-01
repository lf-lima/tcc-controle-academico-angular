import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'src/app/shared/models/subject'
import { SubjectService } from 'src/app/shared/services/subject.service'

@Component({
  selector: 'app-show-subject',
  templateUrl: './show-subject.component.html',
  styleUrls: ['./show-subject.component.scss']
})
export class ShowSubjectComponent implements OnInit {

  subject: Subject = {
    subjectName: '',
    courseId: 0,
    id: 0,
    professorId: 0,
    subjectDescription: ''
  }

  loadingUploadFile: boolean = false
  file!: File
  subjectId!: number

  constructor (
    private subjectService: SubjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.subjectId = Number(this.route.snapshot.paramMap.get('subjectId'))

    this.subjectService.getSubjectById(this.subjectId).subscribe((response: any) => { this.subject = response.body })
  }

  onChange (event: any) {
    this.file = event.target.files[0]
  }

  uploadFile () {
    this.loadingUploadFile = !this.loadingUploadFile

    this.subjectService.uploadFile(this.subjectId, this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.loadingUploadFile = false
        }
      }
    )
  }
}
