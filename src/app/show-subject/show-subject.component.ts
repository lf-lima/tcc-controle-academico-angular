import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { faDownload, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Subject } from 'src/app/shared/models/subject'
import { UploadedFile } from 'src/app/shared/models/uploadedFile'
import { SubjectService } from 'src/app/shared/services/subject.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-show-subject',
  templateUrl: './show-subject.component.html',
  styleUrls: ['./show-subject.component.scss']
})
export class ShowSubjectComponent implements OnInit {

  iconPlus = faPlus
  iconDownload = faDownload
  iconTrash = faTrash

  subject: Subject = {
    subjectName: '',
    courseId: 0,
    id: 0,
    professorId: 0,
    subjectDescription: ''
  }

  uploadedFiles: UploadedFile[] = []

  loadingUploadFile: boolean = false
  file!: File
  subjectId!: number

  permissions!: string[]

  constructor (
    private subjectService: SubjectService,
    private tokenService: TokenService,
    private route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.permissions = this.tokenService.getTokenPayload().permissions
    this.subjectId = Number(this.route.snapshot.paramMap.get('subjectId'))

    this.subjectService.getSubjectById(this.subjectId).subscribe((response: any) => { this.subject = response.body })
    this.getAllUploadedFiles()
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
          this.getAllUploadedFiles()
        }
      }
    )
  }

  getAllUploadedFiles () {
    this.subjectService.getAllUploadedFilesBySubjectId(this.subjectId).subscribe((response: any) => { this.uploadedFiles = response.body })
  }

  downloadFile (fileId: number) {
    this.subjectService.getDownloadUrlFromUploadedFile(this.subjectId, fileId).subscribe((response: any) => {
      const downloadUrl: string = response.body.downloadUrl

      const anchor = document.createElement("a")
      anchor.download = "myfile.txt"
      anchor.href = downloadUrl
      anchor.click()
      anchor.remove()
    })
  }

  deleteFile (fileId: number) {
    this.subjectService.deleteUploadedFile(this.subjectId, fileId).subscribe((response: any) => {
      this.getAllUploadedFiles()
    })
  }

  checkUserHavePermission (requiredPermission: string) {
    return !!this.permissions.find(permission => permission === requiredPermission)
  }
}
