import { Routes } from '@angular/router';
import { UserTypeComponent } from './user-type/user-type.component';
import { SupplierDashboardComponent } from './supplier/dashboard/supplier-dashboard.component';
import { CustomerDashboardComponent } from './customer/dashboard/customer-dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RouteOptimizerComponent } from './route-optimizer/route-optimizer.component';
import { CraneSelectorComponent } from './crane-selector/crane-selector.component';
import { UserTypeGuard } from './guards/user-type.guard';

export const routes: Routes = [
  {
    path: '',
    component: UserTypeComponent,
    pathMatch: 'full'
  },
  // Supplier routes
  {
    path: 'supplier',
    canActivate: [UserTypeGuard],
    children: [
      {
        path: 'dashboard',
        component: SupplierDashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  // Customer routes
  {
    path: 'customer',
    canActivate: [UserTypeGuard],
    children: [
      {
        path: 'dashboard',
        component: CustomerDashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  // Protected shared routes
  {
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [UserTypeGuard]
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    canActivate: [UserTypeGuard]
  },
  {
    path: 'route-optimizer',
    component: RouteOptimizerComponent,
    canActivate: [UserTypeGuard]
  },
  {
    path: 'crane-selector',
    component: CraneSelectorComponent,
    canActivate: [UserTypeGuard]
  },
  // Wildcard route
  {
    path: '**',
    redirectTo: ''
  }
];
