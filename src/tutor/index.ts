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
  router.addRoute(
    { 
      route: 'tutors/:tutorId',
      name: 'tutor-details', 
      moduleId: PLATFORM.moduleName('tutor/elements/tutor-details.html', { chunk: 'tutorChunk'}),
      settings: { requiresAuth: true, message: 'contact a tutor or navigate to the details' }
    }
  );
}
