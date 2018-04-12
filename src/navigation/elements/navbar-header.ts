import { bindable } from 'aurelia-framework';

export class NavbarHeader {
  title: string = 'Subject Hub';
  @bindable hideMainPageAction: boolean;
  @bindable menuButtonClickHandler: Function;
  @bindable dashboardButtonClickHandler: Function;
  @bindable backButtonClickHandler: Function;
}
