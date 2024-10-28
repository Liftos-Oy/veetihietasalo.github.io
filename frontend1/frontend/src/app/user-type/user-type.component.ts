// File: src/app/user-type/user-type.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserTypeService} from '../services/user-type.service';

@Component({
  selector: 'app-user-type',
  standalone: true,
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div class="text-center">
          <img class="mx-auto h-16 w-auto" src="assets/liftos-logo.png" alt="LiftOS">
          <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcome to LiftOS</h2>
          <p class="mt-2 text-sm text-gray-600">Please select how you want to use our service</p>
        </div>

        <div class="mt-8 space-y-6">
          <button
            (click)="navigate('supplier')"
            class="relative w-full group">
            <div class="p-6 bg-white border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-all">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900">I'm a Supplier</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-blue-500"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
              <p class="mt-2 text-sm text-gray-500">I provide crane and lifting services</p>
            </div>
          </button>

          <button
            (click)="navigate('customer')"
            class="relative w-full group">
            <div class="p-6 bg-white border-2 border-gray-300 rounded-lg hover:border-green-500 transition-all">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900">I'm a Customer</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-green-500"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
              <p class="mt-2 text-sm text-gray-500">I need crane and lifting services</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  `
})
export class UserTypeComponent {
  constructor(
    private router: Router,
    private userTypeService: UserTypeService
  ) {}

  navigate(userType: 'supplier' | 'customer') {
    this.userTypeService.setUserType(userType);
    this.router.navigate([`/${userType}/dashboard`]);
  }
}
