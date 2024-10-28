// File: src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import { UserTypeService } from './services/user-type.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-100">
      <!-- Navigation shown only when user type is selected -->
      <nav *ngIf="userTypeService.userType$ | async" class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center cursor-pointer" (click)="navigateToUserType()">
                <img class="h-8 w-auto" src="assets/liftos-logo.png" alt="LiftOS">
              </div>

              <!-- Supplier Navigation -->
              <div *ngIf="(userTypeService.userType$ | async) === 'supplier'"
                   class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a [routerLink]="['/supplier/dashboard']"
                   routerLinkActive="border-blue-500 text-gray-900"
                   [routerLinkActiveOptions]="{exact: true}"
                   class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </a>
                <a [routerLink]="['/inventory']"
                   routerLinkActive="border-blue-500 text-gray-900"
                   [routerLinkActiveOptions]="{exact: true}"
                   class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Inventory
                </a>
                <a [routerLink]="['/route-optimizer']"
                   routerLinkActive="border-blue-500 text-gray-900"
                   [routerLinkActiveOptions]="{exact: true}"
                   class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Route Optimizer
                </a>
                <a [routerLink]="['/bookings']"
                   routerLinkActive="border-blue-500 text-gray-900"
                   [routerLinkActiveOptions]="{exact: true}"
                   class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Bookings
                </a>
              </div>

              <!-- Customer Navigation -->
              <div *ngIf="(userTypeService.userType$ | async) === 'customer'"
                   class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a [routerLink]="['/customer/dashboard']"
                   routerLinkActive="border-green-500 text-gray-900"
                   [routerLinkActiveOptions]="{exact: true}"
                   class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </a>
                <a [routerLink]="['/crane-selector']"
                   routerLinkActive="border-green-500 text-gray-900"
                   [routerLinkActiveOptions]="{exact: true}"
                   class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Crane Selector
                </a>
                <a [routerLink]="['/bookings']"
                   routerLinkActive="border-green-500 text-gray-900"
                   [routerLinkActiveOptions]="{exact: true}"
                   class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  My Bookings
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Main content -->
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {
  constructor(
    public userTypeService: UserTypeService,
    private router: Router  // Add Router to constructor
  ) {}

  navigateToUserType() {
    this.userTypeService.setUserType(null);
    this.router.navigate(['/']);  // Add explicit navigation
  }
}
