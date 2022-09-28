import { Student } from 'src/app/shared/models/student'
import { PartialBy } from 'src/app/shared/utils/partialBy'

export interface NewStudentInputDto extends PartialBy<Student, 'id'> {
  confirmPassword: string
}
