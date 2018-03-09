import { Router, NavModel, RouteConfig, NavigationInstruction } from 'aurelia-router';
import { bindable, autoinject } from 'aurelia-framework';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';

@autoinject
export class Navbar {
  
  private DASHBOARD_ROUTE_NAME: string = 'dashboard';

  @bindable router: Router;
  private isDashboardCurrentRoute: boolean;
  private navigation: NavModel[];
  private ea: EventAggregator;
  private sub: Subscription;

  constructor(eventAggregator: EventAggregator) {
    this.ea = eventAggregator;
  }

  attached(): void {
    this.updateDashboardCurrentRouteFlag(this.router.currentInstruction.config.name);
    this.navigation = this.router.navigation;
    this.sub = this.ea.subscribe('router:navigation:success', (response) => {
      this.updateDashboardCurrentRouteFlag(response.instruction.config.name);
    });
  }

  detached() {
    this.sub.dispose();
  }

  updateDashboardCurrentRouteFlag(routeName: string): void {
    this.isDashboardCurrentRoute = routeName === this.DASHBOARD_ROUTE_NAME;
  }

  drawerToggleHandler(): void {
    const drawerButton = document.getElementsByClassName('mdl-layout__drawer-button')[0] as HTMLElement;
    if (drawerButton) {
      drawerButton.click();
    }
  }

  navigateToDashboardHandler() {
    this.router.navigateToRoute(this.DASHBOARD_ROUTE_NAME);
  }

  navigateBackHandler() {
    this.router.navigateBack();
  }
}
