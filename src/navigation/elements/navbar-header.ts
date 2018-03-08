import { bindable } from 'aurelia-framework';

export class NavbarHeader {

  title: string = 'Subject Hub';
  @bindable hideMainPageAction: boolean;
  @bindable menuClickHandler: Function;

}
