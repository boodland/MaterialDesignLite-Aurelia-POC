import { SubjectService } from './../services/subject';
import { ISubjectItem } from '../models/subject-item';

export class SubjectList {
  subjectList: ISubjectItem[] = SubjectService.getSubjects();
}
