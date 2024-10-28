import { Routes } from '@angular/router';
import { UserTypeComponent } from './user-type/user-type.component';
import { SupplierDashboardComponent } from './supplier/dashboard/supplier-dashboard.component';
import { CustomerDashboardComponent } from './customer/dashboard/customer-dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RouteOptimizerComponent } from './route-optimizer/route-optimizer.component';
import { CraneSelectorComponent } from './crane-selector/crane-selector.component';

export const routes: Routes = [
  {
    path: '',
    component: UserTypeComponent
  },
  {
    path: 'supplier/dashboard',
    component: SupplierDashboardComponent
  },
  {
    path: 'customer/dashboard',
    component: CustomerDashboardComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'route-optimizer',
    component: RouteOptimizerComponent
  },
  {
    path: 'crane-selector',
    component: CraneSelectorComponent
  },
  // Redirect any unknown paths to home
  {
    path: '**',
    redirectTo: ''
  }
];
