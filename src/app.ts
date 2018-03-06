import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Subject Hub";
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', redirect: 'dashboard' },
      { 
        route: 'dashboard', 
        name: 'dashboard', 
        moduleId: PLATFORM.moduleName('dashboard/elements/dashboard-list'), 
        nav: true, 
        title: 'Dashboard'
      }
    ]);
  }
}
