import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Summary Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Summary</h2>
          <p class="text-gray-600">Total Bookings: 150</p>
          <p class="text-gray-600">Active Cranes: 25</p>
        </div>

        <!-- Recent Activity Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul class="space-y-2">
            <li class="text-gray-600">New booking: Project A</li>
            <li class="text-gray-600">Crane #12 maintenance completed</li>
            <li class="text-gray-600">Route optimized for Project B</li>
          </ul>
        </div>

        <!-- Quick Actions Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
          <div class="space-y-2">
            <button class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              New Booking
            </button>
            <button class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
              Optimize Routes
            </button>
          </div>
        </div>
      </div>

      <!-- Chart Placeholder -->
      <div class="mt-8 bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Performance Overview</h2>
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <p class="text-gray-600">Chart will be displayed here</p>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  styles: []
})
export class DashboardComponent {
  // Component logic will go here
}
