import { Course } from 'src/app/shared/models/course'
import { PartialBy } from 'src/app/shared/utils/partialBy'

export type NewCourseInputDto = PartialBy<Course, 'id'>
