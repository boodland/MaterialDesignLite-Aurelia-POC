import { SubjectService } from './../services/subject';
import { ISubjectItem } from './../models/subject-item';

export class SubjectDetails {

  private selectedSubject: ISubjectItem;

  activate(params: any) {
    this.selectedSubject = SubjectService.getSubject(params.subjectId);
  }
}
