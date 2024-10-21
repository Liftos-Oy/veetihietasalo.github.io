import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RouteOptimizerComponent } from './route-optimizer/route-optimizer.component';
import { CraneSelectorComponent } from './crane-selector/crane-selector.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'route-optimizer', component: RouteOptimizerComponent },
  { path: 'crane-selector', component: CraneSelectorComponent },
  { path: '**', redirectTo: '/dashboard' } // Redirect to dashboard for any unknown routes
];
