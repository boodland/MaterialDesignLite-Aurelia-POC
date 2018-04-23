import { NavigationInstruction, Next } from 'aurelia-router';
import { DialogService } from 'aurelia-dialog';
import { inject } from 'aurelia-framework';

@inject(DialogService)
export class AppAuthorizationStep {
  
  constructor(private dialogService: DialogService) {
  }

  run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.requiresAuth)) { 
      this.dialogService.open().whenClosed(response => { return next.cancel(); })
    }

    return next();
  }
}
