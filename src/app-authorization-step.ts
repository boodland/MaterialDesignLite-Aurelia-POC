import { NavigationInstruction, Next, RedirectToRoute } from 'aurelia-router';

export class AppAuthorizationStep {
  
  run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    const routeSettings = navigationInstruction.config.settings;
    if (routeSettings && routeSettings.requiresAuth) { 
      return next.cancel(new RedirectToRoute('login', { message: routeSettings.message }));
    }
    else {
      return next();
    }
  }
}
