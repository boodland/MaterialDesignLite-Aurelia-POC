import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

import { AppAuthorizationStep } from './app-authorization-step';

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
      { 
        route: 'exams', 
        name: 'exams', 
        moduleId: PLATFORM.moduleName('forbidden-element.html'),
        nav: 4, 
        title: 'Exams',
        settings: { 
          icon: 'edit', 
          requiresAuth: true, 
          message: 'navigate to exams list' }
      },
      { 
        route: 'login', 
        name: 'login', 
        moduleId: PLATFORM.moduleName('app-login'), 
        title: 'Login',
      },
      { route: ['', '*path'], redirect: 'dashboard' },
    ]);
  }
}
