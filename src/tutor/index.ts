import { Router } from 'aurelia-router';
import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration): void {
  var router: Router = config.aurelia.container.get(Router);
  router.addRoute(
    { 
      route: 'tutors', 
      name: 'tutors', 
      moduleId: PLATFORM.moduleName('tutor/elements/tutor-list', { chunk: 'tutorChunk'}), 
      nav: 3, 
      title: 'Tutors',
      settings: { icon: 'person' }
    }
  );
}
