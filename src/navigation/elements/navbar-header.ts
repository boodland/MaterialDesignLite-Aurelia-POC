import { bindable } from 'aurelia-framework';

export class NavbarHeader {

  title: string = 'Subject Hub';
  @bindable isDashboardCurrentRoute: boolean;

  drawerHandler(): void {
    const drawerButton = document.getElementsByClassName('mdl-layout__drawer-button')[0] as HTMLElement;
    if (drawerButton) {
      drawerButton.click();
    }
  }
}
