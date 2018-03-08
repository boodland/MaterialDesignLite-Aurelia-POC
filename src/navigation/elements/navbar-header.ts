import { bindable } from 'aurelia-framework';

export class NavbarHeader {

  title: string = 'Subject Hub';
  @bindable isDashboardCurrentRoute: boolean;
  @bindable menuClickHandler: Function;

}
