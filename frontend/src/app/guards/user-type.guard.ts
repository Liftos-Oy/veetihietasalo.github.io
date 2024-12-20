import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  NavigationEnd
} from '@angular/router';
import { UserTypeService } from '../services/user-type.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {
  constructor(
    private userTypeService: UserTypeService,
    private router: Router
  ) {
    // Listen to navigation events to handle back/forward navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // If navigating to root, clear user type
      if (event.url === '/') {
        this.userTypeService.clearUserType();
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userType = this.userTypeService.getUserType();
    const path = route.routeConfig?.path || '';

    // Special handling for root path
    if (path === '') {
      this.userTypeService.clearUserType();
      return true;
    }

    // If no user type and not on root path, redirect to root
    if (!userType && path !== '') {
      this.router.navigate(['/']);
      return false;
    }

    // Define route types
    const isSupplierRoute =
      path.includes('supplier') ||
      path === 'inventory' ||
      path === 'route-optimizer';

    const isCustomerRoute =
      path.includes('customer') ||
      path === 'crane-selector';

    const isCommonRoute =
      path === 'bookings' ||
      path === 'profile' ||
      path === 'settings';

    // Check route permissions
    if (userType === 'supplier' && (isSupplierRoute || isCommonRoute)) {
      return true;
    }

    if (userType === 'customer' && (isCustomerRoute || isCommonRoute)) {
      return true;
    }

    // If user has type but tries to access unauthorized route
    if (userType) {
      this.router.navigate([`/${userType}/dashboard`]);
      return false;
    }

    // Fallback: redirect to root
    this.router.navigate(['/']);
    return false;
  }
}
