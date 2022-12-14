import { Institution } from 'src/app/shared/models/institution'
import { PartialBy } from 'src/app/shared/utils/partialBy'

export interface NewInstitutionInputDto extends PartialBy<Institution, 'id'> {
  confirmPassword: string
}
