// File: src/app/guards/user-type.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserTypeService } from '../services/user-type.service';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {
  constructor(
    private userTypeService: UserTypeService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userType = this.userTypeService.getUserType();

    if (!userType) {
      this.router.navigate(['/']);
      return false;
    }

    // Check if the route is allowed for the user type
    const path = route.routeConfig?.path || '';
    const isSupplierRoute = path.includes('supplier') ||
      path === 'inventory' ||
      path === 'route-optimizer';
    const isCustomerRoute = path.includes('customer') ||
      path === 'crane-selector';

    if ((isSupplierRoute && userType === 'supplier') ||
      (isCustomerRoute && userType === 'customer') ||
      path === 'bookings') {
      return true;
    }

    this.router.navigate([`/${userType}/dashboard`]);
    return false;
  }
}
