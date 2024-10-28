// File: src/app/customer/dashboard/customer-dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  template: `

      <!-- Main content -->
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <!-- Quick Actions -->
          <div class="mb-8">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <button class="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
                <div class="flex items-center">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span class="ml-3 text-gray-900">Book New Service</span>
                </div>
              </button>

              <button class="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
                <div class="flex items-center">
                  <svg class="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span class="ml-3 text-gray-900">View Schedule</span>
                </div>
              </button>

              <button class="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
                <div class="flex items-center">
                  <svg class="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                  <span class="ml-3 text-gray-900">Get Quote</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Active Bookings Section -->
          <div class="mb-8">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Active Bookings</h2>
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
              <ul class="divide-y divide-gray-200">
                <li class="px-6 py-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium text-blue-600">Crane Rental - Mobile Crane</p>
                      <p class="text-sm text-gray-500">Scheduled for: Oct 25, 2024</p>
                    </div>
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </div>
                </li>
                <li class="px-6 py-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium text-blue-600">Heavy Lifting Operation</p>
                      <p class="text-sm text-gray-500">Scheduled for: Oct 28, 2024</p>
                    </div>
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Recent Activity -->
          <div>
            <h2 class="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <div class="flow-root">
                  <ul class="-mb-8">
                    <li class="pb-4">
                      <div class="relative">
                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        <div class="relative flex space-x-3">
                          <div>
                            <span
                              class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                              <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7"/>
                              </svg>
                            </span>
                          </div>
                          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p class="text-sm text-gray-500">Booking confirmed for Mobile Crane</p>
                            </div>
                            <div class="text-right text-sm whitespace-nowrap text-gray-500">
                              <time>2h ago</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="pb-4">
                      <div class="relative">
                        <div class="relative flex space-x-3">
                          <div>
                            <span
                              class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                              </svg>
                            </span>
                          </div>
                          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p class="text-sm text-gray-500">Quote request sent</p>
                            </div>
                            <div class="text-right text-sm whitespace-nowrap text-gray-500">
                              <time>1d ago</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `
})
export class CustomerDashboardComponent {}
