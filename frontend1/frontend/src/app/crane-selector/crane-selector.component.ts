import { Component } from '@angular/core';

@Component({
  selector: 'app-crane-selector',
  template: `
    <div class="container mx-auto p-6">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">AI Crane Selector</h1>
        <button
          class="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
          Get AI Recommendation
        </button>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-xl font-semibold mb-4">Project Requirements</h2>
            <form>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="maxLoad">
                    Maximum Load (tons)
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="maxLoad" type="number" placeholder="Enter max load">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="maxHeight">
                    Maximum Lift Height (m)
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="maxHeight" type="number" placeholder="Enter max height">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="radius">
                    Working Radius (m)
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="radius" type="number" placeholder="Enter working radius">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">
                    Project Duration (days)
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="duration" type="number" placeholder="Enter project duration">
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="terrain">
                  Terrain Type
                </label>
                <select
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="terrain">
                  <option>Flat Ground</option>
                  <option>Uneven Terrain</option>
                  <option>Soft Soil</option>
                  <option>Rocky Ground</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="constraints">
                  Site Constraints
                </label>
                <textarea
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="constraints" placeholder="Enter any site constraints or special requirements"></textarea>
              </div>
            </form>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">AI Recommendation</h2>
          <div class="bg-purple-100 p-4 rounded-lg mb-4">
            <h3 class="text-lg font-semibold text-purple-800">Recommended Crane</h3>
            <p class="text-3xl font-bold text-purple-600">Liebherr LTM 1100-4.2</p>
          </div>
          <ul class="space-y-2 mb-4">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"/>
              </svg>
              Max Load: 100 tons
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"/>
              </svg>
              Max Height: 60 m
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"/>
              </svg>
              Working Radius: 50 m
            </li>
          </ul>
          <div class="mb-4">
            <h4 class="font-semibold mb-2">Confidence Score</h4>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-green-600 h-2.5 rounded-full" style="width: 85%"></div>
            </div>
            <p class="text-right text-sm text-gray-600">85%</p>
          </div>
          <button
            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            View Full Details
          </button>
        </div>
      </div>

      <div class="mt-6 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Alternative Options</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crane Model
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Load</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Height</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Working
                Radius
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Grove GMK5150L</td>
              <td class="px-6 py-4 whitespace-nowrap">150 tons</td>
              <td class="px-6 py-4 whitespace-nowrap">69 m</td>
              <td class="px-6 py-4 whitespace-nowrap">60 m</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-yellow-400 h-2.5 rounded-full" style="width: 70%"></div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-indigo-600 hover:text-indigo-900">Select</button>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Tadano ATF 110G-5</td>
              <td class="px-6 py-4 whitespace-nowrap">110 tons</td>
              <td class="px-6 py-4 whitespace-nowrap">52 m</td>
              <td class="px-6 py-4 whitespace-nowrap">48 m</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-yellow-400 h-2.5 rounded-full" style="width: 65%"></div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-indigo-600 hover:text-indigo-900">Select</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  styles: []
})
export class CraneSelectorComponent {
  // Component logic will go here
}
