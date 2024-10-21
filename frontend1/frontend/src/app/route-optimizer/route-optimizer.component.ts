import { Component } from '@angular/core';

@Component({
  selector: 'app-route-optimizer',
  template: `
    <div class="container mx-auto p-6">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Route Optimizer</h1>
        <button
          class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"/>
          </svg>
          Optimize Routes
        </button>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-xl font-semibold mb-4">Route Map</h2>
            <div class="bg-gray-200 h-96 flex items-center justify-center rounded-lg">
              <p class="text-gray-600">Interactive map will be displayed here</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Optimization Parameters</h2>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="vehicleCount">
                Number of Vehicles
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="vehicleCount" type="number" placeholder="Enter number of vehicles">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="maxDistance">
                Max Distance (km)
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="maxDistance" type="number" placeholder="Enter max distance">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="timeWindow">
                Time Window (hours)
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="timeWindow" type="number" placeholder="Enter time window">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="priority">
                Optimization Priority
              </label>
              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="priority">
                <option>Minimize Distance</option>
                <option>Minimize Time</option>
                <option>Balance Load</option>
              </select>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Apply Parameters
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="mt-6 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Optimized Routes</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated
                Time
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Vehicle 1</td>
              <td class="px-6 py-4 whitespace-nowrap">A → B → C → D</td>
              <td class="px-6 py-4 whitespace-nowrap">150 km</td>
              <td class="px-6 py-4 whitespace-nowrap">3h 30min</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                <button class="text-green-600 hover:text-green-900">Assign</button>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Vehicle 2</td>
              <td class="px-6 py-4 whitespace-nowrap">E → F → G</td>
              <td class="px-6 py-4 whitespace-nowrap">120 km</td>
              <td class="px-6 py-4 whitespace-nowrap">2h 45min</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                <button class="text-green-600 hover:text-green-900">Assign</button>
              </td>
            </tr>
            <!-- More rows can be added dynamically -->
            </tbody>
          </table>
        </div>
      </div>

      <div class="mt-6 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Optimization Summary</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-blue-100 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-800">Total Distance</h3>
            <p class="text-3xl font-bold text-blue-600">270 km</p>
          </div>
          <div class="bg-green-100 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-green-800">Total Time</h3>
            <p class="text-3xl font-bold text-green-600">6h 15min</p>
          </div>
          <div class="bg-yellow-100 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-yellow-800">Vehicles Used</h3>
            <p class="text-3xl font-bold text-yellow-600">2 / 5</p>
          </div>
          <div class="bg-purple-100 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-800">Efficiency Score</h3>
            <p class="text-3xl font-bold text-purple-600">92%</p>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  styles: []
})
export class RouteOptimizerComponent {
  // Component logic will go here
}
