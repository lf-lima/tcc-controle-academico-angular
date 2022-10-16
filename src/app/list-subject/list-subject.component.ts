import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/shared/models/subject'
import { TokenPayload } from 'src/app/shared/models/tokenPayload'
import { SubjectService } from 'src/app/shared/services/subject.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.scss']
})
export class ListSubjectComponent implements OnInit {

  subjects!: Subject[]
  tokenPayload!: TokenPayload

  constructor(
    private subjectService: SubjectService,
    private tokenService: TokenService
  ) {
    this.tokenPayload = this.tokenService.getTokenPayload()
  }

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe((response: any) => { this.subjects = response.body })
  }

  checkHasPermission (requiredPermission: string): boolean {
    const { permissions } = this.tokenPayload
    return !!permissions.find(permission => permission === requiredPermission)
  }
}
