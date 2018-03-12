import { IDashboardItem } from '../models/dashboard-item';

export class DashboardList {
  dashboardList: IDashboardItem[] = [
    {
      subjectId: 1, title: 'History', assessmentDate: new Date(2018, 4),
      numOfSeats: 680, numOfTutors: 345, numOfExams: 390, image: 'history'
    },
    {
      subjectId: 2, title: 'Bakery', assessmentDate: new Date(2018, 0),
      numOfSeats: 80, numOfTutors: 45, numOfExams: 250, image: 'bakery'
    },
    {
      subjectId: 3, title: 'Law', assessmentDate: new Date(2017, 9),
      numOfSeats: 320, numOfTutors: 645, numOfExams: 850, image: 'law'
    },
    {
      subjectId: 4, title: 'Science', assessmentDate: new Date(2018, 10),
      numOfSeats: 430, numOfTutors: 35, numOfExams: 177, image: 'science'
    },
    {
      subjectId: 5, title: 'Veggie Cuisine', assessmentDate: new Date(2018, 2),
      numOfSeats: 75, numOfTutors: 54, numOfExams: 285, image: 'vegetables'
    },
    {
      subjectId: 6, title: 'Geography', assessmentDate: new Date(2018, 6),
      numOfSeats: 430, numOfTutors: 35, numOfExams: 177, image: 'geography'
    },
    {
      subjectId: 7, title: 'Algebra', assessmentDate: new Date(2018, 3),
      numOfSeats: 930, numOfTutors: 155, numOfExams: 763, image: 'algebra'
    },
    {
      subjectId: 8, title: 'Music', assessmentDate: new Date(2018, 8),
      numOfSeats: 30, numOfTutors: 15, numOfExams: 73, image: 'music'
    }
  ];
}
