import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Header with Welcome Message -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Welcome back, Powerlift Finland Oy!</h1>
        <p class="text-gray-600">Here's what's happening with your equipment today.</p>
      </div>

      <!-- Main Stats Grid -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <!-- Active Bookings -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Active Bookings</dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900">12</div>
                    <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12">
                        <path d="M3 8l3-3 3 3"/>
                      </svg>
                      <span class="ml-1">8%</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- Equipment Utilization -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-green-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Equipment Utilization</dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900">78%</div>
                    <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12">
                        <path d="M3 8l3-3 3 3"/>
                      </svg>
                      <span class="ml-1">12%</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- Revenue -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-purple-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Monthly Revenue</dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900">€24,500</div>
                    <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12">
                        <path d="M3 8l3-3 3 3"/>
                      </svg>
                      <span class="ml-1">15%</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- Customer Satisfaction -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Customer Satisfaction</dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900">4.8/5.0</div>
                    <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12">
                        <path d="M3 8l3-3 3 3"/>
                      </svg>
                      <span class="ml-1">0.3</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts and Activity Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Revenue Chart -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
          <div class="relative h-60">
            <!-- Simple SVG Line Chart -->
            <svg class="w-full h-full" viewBox="0 0 400 200">
              <path
                d="M0,150 L50,120 L100,140 L150,100 L200,110 L250,80 L300,95 L350,60 L400,40"
                fill="none"
                stroke="#4F46E5"
                stroke-width="2"
              />
              <!-- Data points -->
              <circle cx="0" cy="150" r="3" fill="#4F46E5"/>
              <circle cx="50" cy="120" r="3" fill="#4F46E5"/>
              <circle cx="100" cy="140" r="3" fill="#4F46E5"/>
              <circle cx="150" cy="100" r="3" fill="#4F46E5"/>
              <circle cx="200" cy="110" r="3" fill="#4F46E5"/>
              <circle cx="250" cy="80" r="3" fill="#4F46E5"/>
              <circle cx="300" cy="95" r="3" fill="#4F46E5"/>
              <circle cx="350" cy="60" r="3" fill="#4F46E5"/>
              <circle cx="400" cy="40" r="3" fill="#4F46E5"/>
            </svg>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white rounded-lg shadow">
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div class="flow-root">
              <ul class="-mb-8">
                <li class="relative pb-8">
                  <div class="relative flex items-start space-x-3">
                    <div class="relative px-1">
                      <div class="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center ring-8 ring-white">
                        <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div>
                        <p class="text-sm text-gray-500">New booking received</p>
                        <p class="mt-0.5 text-sm text-gray-600">30 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="relative pb-8">
                  <div class="relative flex items-start space-x-3">
                    <div class="relative px-1">
                      <div class="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center ring-8 ring-white">
                        <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div>
                        <p class="text-sm text-gray-500">Crane #123 completed maintenance</p>
                        <p class="mt-0.5 text-sm text-gray-600">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="relative pb-8">
                  <div class="relative flex items-start space-x-3">
                    <div class="relative px-1">
                      <div class="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center ring-8 ring-white">
                        <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div>
                        <p class="text-sm text-gray-500">Maintenance scheduled for Crane #456</p>
                        <p class="mt-0.5 text-sm text-gray-600">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Equipment Status Section -->
      <div class="mt-8 bg-white rounded-lg shadow">
        <div class="p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Equipment Status Overview</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-gray-500">Available</h4>
                <span class="text-green-600 text-lg font-semibold">8</span>
              </div>
              <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" style="width: 40%"></div>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-gray-500">In Use</h4>
                <span class="text-blue-600 text-lg font-semibold">12</span>
              </div>
              <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 60%"></div>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-gray-500">Maintenance</h4>
                <span class="text-yellow-600 text-lg font-semibold">3</span>
              </div>
              <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div class="bg-yellow-500 h-2 rounded-full" style="width: 15%"></div>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-gray-500">Inactive</h4>
                <span class="text-red-600 text-lg font-semibold">1</span>
              </div>
              <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div class="bg-red-500 h-2 rounded-full" style="width: 5%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Weekly Performance Chart -->
      <div class="mt-8 bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Weekly Performance</h3>
        <div class="relative h-80">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-full h-full">
              <!-- Bar Chart -->
              <svg class="w-full h-full" viewBox="0 0 400 200">
                <!-- Grid lines -->
                <line x1="0" y1="160" x2="400" y2="160" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="120" x2="400" y2="120" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="80" x2="400" y2="80" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="40" x2="400" y2="40" stroke="#E5E7EB" stroke-width="1"/>

                <!-- Bars -->
                <g class="bars">
                  <!-- Monday -->
                  <rect x="45" y="100" width="30" height="60" fill="#4F46E5" opacity="0.8"/>
                  <text x="50" y="180" class="text-xs" fill="#6B7280">Mon</text>

                  <!-- Tuesday -->
                  <rect x="105" y="80" width="30" height="80" fill="#4F46E5" opacity="0.8"/>
                  <text x="110" y="180" class="text-xs" fill="#6B7280">Tue</text>

                  <!-- Wednesday -->
                  <rect x="165" y="60" width="30" height="100" fill="#4F46E5" opacity="0.8"/>
                  <text x="170" y="180" class="text-xs" fill="#6B7280">Wed</text>

                  <!-- Thursday -->
                  <rect x="225" y="40" width="30" height="120" fill="#4F46E5" opacity="0.8"/>
                  <text x="230" y="180" class="text-xs" fill="#6B7280">Thu</text>

                  <!-- Friday -->
                  <rect x="285" y="70" width="30" height="90" fill="#4F46E5" opacity="0.8"/>
                  <text x="290" y="180" class="text-xs" fill="#6B7280">Fri</text>

                  <!-- Saturday -->
                  <rect x="345" y="90" width="30" height="70" fill="#4F46E5" opacity="0.8"/>
                  <text x="350" y="180" class="text-xs" fill="#6B7280">Sat</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <button class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
          <div class="flex items-center">
            <div class="bg-blue-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
            <span class="ml-4 text-gray-900 font-medium">Create New Booking</span>
          </div>
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <button class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
          <div class="flex items-center">
            <div class="bg-green-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <span class="ml-4 text-gray-900 font-medium">View Reports</span>
          </div>
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <button class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
          <div class="flex items-center">
            <div class="bg-purple-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
            </div>
            <span class="ml-4 text-gray-900 font-medium">Equipment Settings</span>
          </div>
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  `
})
export class SupplierDashboardComponent {}
