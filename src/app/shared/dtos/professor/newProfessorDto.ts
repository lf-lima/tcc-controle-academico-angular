import { Professor } from 'src/app/shared/models/professor'
import { PartialBy } from 'src/app/shared/utils/partialBy'

export interface NewProfessorInputDto extends PartialBy<Professor, 'id'> {
  confirmPassword: string
}
