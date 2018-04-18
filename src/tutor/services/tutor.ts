import { ITutorItem } from './../models/tutor-item';

export class TutorService {
  static WEB_API_ADRESS = 'https://randomuser.me/api/?results=30';

  static getRatingStars(rating: number): string[] {
    const stars = Array(rating).fill('star');
    const emptyStars = Array(5 - rating).fill('star_border');
    return stars.concat(emptyStars);
  }

  static convertToTutorItem(randomUser: any): ITutorItem {
    return ({
      fullName: `${randomUser.name.first} ${randomUser.name.last}`,
      thumbnail: randomUser.picture.thumbnail,
      ratings: this.getRatingStars(Math.floor(Math.random() * 5) + 1),
    });
  }
  
  static async getTutorsAsync(): Promise<ITutorItem[]> {
    const response = await fetch(this.WEB_API_ADRESS);
    const respJson = await response.json();
    return respJson.results.map(randUser => this.convertToTutorItem(randUser));
  }

}
