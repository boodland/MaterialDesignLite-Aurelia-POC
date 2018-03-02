export class NavbarHeader {
  title: string = 'Subject Hub';
  drawerHandler() {
    const drawerButton = document.getElementsByClassName('mdl-layout__drawer-button')[0] as HTMLElement;
    if (drawerButton) {
      drawerButton.click();
    }
  }
}
