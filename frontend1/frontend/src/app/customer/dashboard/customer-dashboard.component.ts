// File: src/app/customer/dashboard/customer-dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Welcome Banner -->
      <div class="bg-blue-500 rounded-lg shadow-lg mb-8">
        <div class="p-6 sm:p-8">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold text-white">Welcome back, Customer Name</h1>
              <p class="mt-2 text-blue-100">What can we help you lift today?</p>
            </div>
            <button class="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Active Bookings -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center">
            <div class="p-3 bg-blue-100 rounded-full">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-4">
              <h2 class="text-sm font-medium text-gray-600">Active Bookings</h2>
              <p class="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500">Next booking in</span>
              <span class="text-blue-600 font-medium">2 days</span>
            </div>
          </div>
        </div>

        <!-- Total Spent -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center">
            <div class="p-3 bg-green-100 rounded-full">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <h2 class="text-sm font-medium text-gray-600">Total Spent</h2>
              <p class="text-2xl font-semibold text-gray-900">€15,240</p>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500">This month</span>
              <span class="text-green-600 font-medium">+€2,450</span>
            </div>
          </div>
        </div>

        <!-- Completed Projects -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center">
            <div class="p-3 bg-purple-100 rounded-full">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div class="ml-4">
              <h2 class="text-sm font-medium text-gray-600">Completed Projects</h2>
              <p class="text-2xl font-semibold text-gray-900">28</p>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500">Success rate</span>
              <span class="text-purple-600 font-medium">98%</span>
            </div>
          </div>
        </div>

        <!-- Saved Time -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center">
            <div class="p-3 bg-yellow-100 rounded-full">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <h2 class="text-sm font-medium text-gray-600">Time Saved</h2>
              <p class="text-2xl font-semibold text-gray-900">156h</p>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500">Efficiency gain</span>
              <span class="text-yellow-600 font-medium">+23%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Active Projects and Recent Bookings -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- Active Projects -->
        <div class="bg-white rounded-lg shadow-lg">
          <div class="p-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Active Projects</h2>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-medium text-gray-900">Helsinki Office Construction</h3>
                    <p class="text-sm text-gray-600 mt-1">2 cranes deployed • 45% complete</p>
                  </div>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">In Progress</span>
                </div>
                <div class="mt-3">
                  <div class="w-full bg-blue-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: 45%"></div>
                  </div>
                </div>
              </div>

              <div class="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-medium text-gray-900">Espoo Mall Renovation</h3>
                    <p class="text-sm text-gray-600 mt-1">1 crane deployed • 15% complete</p>
                  </div>
                  <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Starting</span>
                </div>
                <div class="mt-3">
                  <div class="w-full bg-yellow-200 rounded-full h-2">
                    <div class="bg-yellow-600 h-2 rounded-full" style="width: 15%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Bookings -->
        <div class="bg-white rounded-lg shadow-lg">
          <div class="p-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h2>
            <div class="flow-root">
              <ul class="-my-5 divide-y divide-gray-200">
                <li class="py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <div class="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                        <svg class="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        Mobile Crane - 50T
                      </p>
                      <p class="text-sm text-gray-500">
                        Booked for Oct 25, 2024
                      </p>
                    </div>
                    <div>
                      <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </li>
                <!-- Add more booking items -->
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="bg-blue-100 p-3 rounded-lg">
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span class="ml-4 text-gray-900 font-medium">New Booking</span>
            </div>
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <button class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="bg-purple-100 p-3 rounded-lg">
                <svg class="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span class="ml-4 text-gray-900 font-medium">View Estimates</span>
            </div>
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <button class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="bg-green-100 p-3 rounded-lg">
                <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span class="ml-4 text-gray-900 font-medium">Support</span>
            </div>
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      <!-- Recommended Equipment -->
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Recommended Equipment</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Crane Card 1 -->
          <div class="border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="h-48 bg-gray-200 rounded-t-lg relative">
              <img src="assets/crane1.jpg" alt="Mobile Crane" class="w-full h-full object-cover rounded-t-lg">
              <span class="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Available
              </span>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium text-gray-900">Mobile Crane - 50T</h3>
              <p class="text-sm text-gray-600 mt-1">Perfect for medium construction projects</p>
              <div class="mt-4 flex justify-between items-center">
                <span class="text-blue-600 font-medium">€500/day</span>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <!-- Crane Card 2 -->
          <div class="border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="h-48 bg-gray-200 rounded-t-lg relative">
              <img src="assets/crane2.jpg" alt="Tower Crane" class="w-full h-full object-cover rounded-t-lg">
              <span class="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Coming Soon
              </span>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium text-gray-900">Tower Crane - 100T</h3>
              <p class="text-sm text-gray-600 mt-1">Ideal for high-rise construction</p>
              <div class="mt-4 flex justify-between items-center">
                <span class="text-blue-600 font-medium">€1,200/day</span>
                <button class="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          <!-- Crane Card 3 -->
          <div class="border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="h-48 bg-gray-200 rounded-t-lg relative">
              <img src="assets/crane3.jpg" alt="Crawler Crane" class="w-full h-full object-cover rounded-t-lg">
              <span class="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Available
              </span>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium text-gray-900">Crawler Crane - 75T</h3>
              <p class="text-sm text-gray-600 mt-1">Best for rough terrain operations</p>
              <div class="mt-4 flex justify-between items-center">
                <span class="text-blue-600 font-medium">€800/day</span>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Customer Support Section -->
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-semibold text-gray-900">Need Help?</h2>
          <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">View All FAQs</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-md font-medium text-gray-900">Contact Support</h3>
                <p class="mt-1 text-sm text-gray-600">Available 24/7 for urgent queries</p>
                <button class="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Get in Touch →
                </button>
              </div>
            </div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-md font-medium text-gray-900">Safety Guidelines</h3>
                <p class="mt-1 text-sm text-gray-600">Learn about our safety protocols</p>
                <button class="mt-3 text-green-600 hover:text-green-700 text-sm font-medium">
                  View Guidelines →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CustomerDashboardComponent {
  // Add component logic here
}
