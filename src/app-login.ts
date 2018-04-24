import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export class AppLogin {
  private message: string;
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  activate(params: any) {
    this.message = params.message;
  }

  navigateBackHandler() {
    this.router.navigateBack();
  }
}
