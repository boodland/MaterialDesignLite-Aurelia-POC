import { Router, NavModel } from 'aurelia-router';
import { bindable } from 'aurelia-framework';

export class Navbar {
  
  @bindable router: Router;
  isDashboardCurrentRoute: boolean;
  navigation: NavModel[];

  attached(): void {
    this.isDashboardCurrentRoute = this.router.currentInstruction.config.title === 'dashboard';
    this.navigation = this.router.navigation;
  }
}
