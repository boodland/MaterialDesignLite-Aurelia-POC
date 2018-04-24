import { NavigationInstruction, Next } from 'aurelia-router';

export class AppAuthorizationStep {
  
  run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.requiresAuth)) { 
      return next.cancel();
    }
    else {
      return next();
    }
  }
}
