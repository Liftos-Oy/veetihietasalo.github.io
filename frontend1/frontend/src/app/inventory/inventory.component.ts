import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Inventory Management</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Inventory Summary Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Inventory Summary</h2>
          <p class="text-gray-600">Total Cranes: 50</p>
          <p class="text-gray-600">Available Cranes: 30</p>
          <p class="text-gray-600">Cranes in Maintenance: 5</p>
        </div>

        <!-- Quick Actions Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
          <div class="space-y-2">
            <button class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Add New Crane
            </button>
            <button class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
              Schedule Maintenance
            </button>
          </div>
        </div>
      </div>

      <!-- Inventory List Placeholder -->
      <div class="mt-8 bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Crane Inventory</h2>
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <p class="text-gray-600">Inventory table will be displayed here</p>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  styles: []
})
export class InventoryComponent {
  // Component logic will go here
}
