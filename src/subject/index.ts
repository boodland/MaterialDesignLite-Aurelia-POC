import { Router } from 'aurelia-router';
import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration): void {
  var router: Router = config.aurelia.container.get(Router);
  router.addRoute(
    { 
      route: 'subjects', 
      name: 'subjects', 
      moduleId: PLATFORM.moduleName('subject/elements/subject-list', { chunk: 'subjectChunk'}), 
      nav: 2, 
      title: 'Subjects',
      settings: { icon: 'school' }
    }
  );
  router.addRoute(
    { 
      route: 'subjects/:subjectId',
      name: 'subject-details', 
      moduleId: PLATFORM.moduleName('subject/elements/subject-details', { chunk: 'subjectChunk'})
    }
  );
  router.addRoute(
    { 
      route: 'subjects/:subjectId/exams',
      name: 'subject-exams', 
      moduleId: PLATFORM.moduleName('forbidden-element.html'),
      settings: { requiresAuth: true, message: "navigate to subject's exams" }
    }
  );
  router.addRoute(
    { 
      route: 'subjects/:subjectId/tutors',
      name: 'subject-tutors', 
      moduleId: PLATFORM.moduleName('forbidden-element.html'),
      settings: { requiresAuth: true, message: "navigate to subject's tutors" }
    }
  );
}
