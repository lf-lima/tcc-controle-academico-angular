import { IStudent } from 'src/app/shared/models/student'
import { PartialBy } from 'src/app/shared/utils/partialBy'

export interface NewStudentInputDto extends PartialBy<IStudent, 'id'> {
  confirmPassword: string
}
