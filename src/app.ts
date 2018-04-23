import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

import { AppAuthorizationStep } from './appAuthorizationStep';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Subject Hub";
    config.options.pushState = true;
    config.options.root = '/';
    config.addAuthorizeStep(AppAuthorizationStep);
    config.map([
      { 
        route: 'dashboard', 
        name: 'dashboard', 
        moduleId: PLATFORM.moduleName('dashboard/elements/dashboard-list'), 
        nav: 1, 
        title: 'Dashboard',
        settings: { icon: 'apps' }
      },
      { route: ['', '*path'], redirect: 'dashboard' },
    ]);
  }
}
