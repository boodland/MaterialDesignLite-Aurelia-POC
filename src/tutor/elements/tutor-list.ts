import { TutorService } from './../services/tutor';
import { ITutorItem } from '../models/tutor-item';

export class TutorList {
  tutorList: ITutorItem[] = [];

  constructor(){
    TutorService.getTutorsAsync()
    .then(tutors => this.tutorList = tutors);
  }
}
