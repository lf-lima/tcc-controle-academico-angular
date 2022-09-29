import { Subject } from 'src/app/shared/models/subject'
import { PartialBy } from 'src/app/shared/utils/partialBy'

export type NewSubjectInputDto = PartialBy<Subject, 'id'>
