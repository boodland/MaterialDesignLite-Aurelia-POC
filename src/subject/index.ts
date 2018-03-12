import { Router } from 'aurelia-router';
import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration): void {
  var router = config.aurelia.container.get(Router);
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
}
