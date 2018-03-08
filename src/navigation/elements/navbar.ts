import { Router, NavModel, RouteConfig, NavigationInstruction } from 'aurelia-router';
import { bindable, autoinject } from 'aurelia-framework';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';

@autoinject
export class Navbar {
  
  @bindable router: Router;
  isDashboardCurrentRoute: boolean;
  navigation: NavModel[];
  ea: EventAggregator;
  sub: Subscription;

  constructor(eventAggregator: EventAggregator) {
    this.ea = eventAggregator;
  }

  attached(): void {
    this.updateDashboardCurrentRouteFlag(this.router.currentInstruction.config.title);
    this.navigation = this.router.navigation;
    this.sub = this.ea.subscribe('router:navigation:success', (response) => {
      this.updateDashboardCurrentRouteFlag(response.instruction.config.title);
    });
  }

  detached() {
    this.sub.dispose();
  }

  updateDashboardCurrentRouteFlag(routeTitle: string): void {
    this.isDashboardCurrentRoute = routeTitle === 'Dashboard';
  }

  drawerToggleHandler(): void {
    const drawerButton = document.getElementsByClassName('mdl-layout__drawer-button')[0] as HTMLElement;
    if (drawerButton) {
      drawerButton.click();
    }
  }
}
