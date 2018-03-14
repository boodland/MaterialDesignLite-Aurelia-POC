export class SubjectDetails {

  private subjectId: number;

  activate(params: any) {
    this.subjectId = params.subjectId;
  }
}
