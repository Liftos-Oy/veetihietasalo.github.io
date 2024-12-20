import { Component } from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';

interface LiftDetails {
  distance: number;
  direction: 'left' | 'right' | 'forward' | 'backward';
  liftType: 'standard' | 'tandem' | 'blind' | 'critical';
}

interface SpecialEquipment {
  id: string;
  name: string;
  required: boolean;
  capacity?: string;
}

interface CraneDetails {
  id: string;
  model: string;
  specifications: {
    maxLoad: string;
    maxHeight: string;
    workingRadius: string;
    enginePower: string;
    dimensions: {
      length: string;
      width: string;
      height: string;
    };
    weight: string;
  };
  features: string[];
  certifications: string[];
  maintenance: {
    lastService: string;
    nextService: string;
    operatingHours: number;
  };
  availability: {
    status: string;
    nextAvailable: string;
    location: string;
  };
  pricing: {
    hourlyRate: number;
    minimumHours: number;
    transportationFee: number;
  };
  environmentalImpact: {
    co2PerHour: number;
    energyEfficiencyRating: string;
    greenCertifications: string[];
    estimatedProjectEmissions: {
      total: number;
      breakdown: {
        operation: number;
        transport: number;
        setup: number;
      };
    };
  };
}

@Component({
  selector: 'app-crane-selector',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
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
                    Load weight
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
                    Working Radius (m2)
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="radius" type="number" placeholder="Enter working radius">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">
                    Lift horizontal distance (m)
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="duration" type="number" placeholder="Enter maximum lifting horizontal distance">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">
                    Project Duration (hours / days / months)
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

              <div class="mb-4">
                <h3 class="text-lg font-medium text-gray-900 mb-3">Special Equipment Requirements</h3>
                <div class="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <!-- Equipment Checklist -->
                  <div class="grid grid-cols-2 gap-4">
                    <div class="flex items-center">
                      <input type="checkbox" id="vacuum-lifter" class="h-4 w-4 text-blue-600 rounded border-gray-300">
                      <label for="vacuum-lifter" class="ml-2 text-gray-700">Glass Vacuum Lifter</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="spreader-beam" class="h-4 w-4 text-blue-600 rounded border-gray-300">
                      <label for="spreader-beam" class="ml-2 text-gray-700">Spreader Beam</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="man-basket" class="h-4 w-4 text-blue-600 rounded border-gray-300">
                      <label for="man-basket" class="ml-2 text-gray-700">Man Basket</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="chain-slings" class="h-4 w-4 text-blue-600 rounded border-gray-300">
                      <label for="chain-slings" class="ml-2 text-gray-700">Chain Slings</label>
                    </div>
                  </div>

                  <!-- Custom Equipment Input -->
                  <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                      Additional Equipment Needs
                    </label>
                    <div class="flex space-x-2">
                      <input
                        class="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Specify any other equipment needed">
                      <button
                        class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200">
                        Add
                      </button>
                    </div>
                  </div>

                  <!-- Equipment List -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between bg-white p-2 rounded border border-gray-200">
                      <span class="text-sm text-gray-700">Glass Vacuum Lifter (1200kg capacity)</span>
                      <button class="text-red-500 hover:text-red-700">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
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
    <button
      (click)="toggleDetails()"
      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      View Full Details
    </button>

    <!-- Full Details Section -->
    <div *ngIf="showDetails" class="mt-6">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="border-b pb-4 mb-4">
          <h3 class="text-xl font-bold text-gray-900">{{ selectedCrane.model }}</h3>
          <p class="text-gray-500">Detailed Specifications and Information</p>
        </div>

        <!-- Technical Specifications -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 class="text-lg font-semibold mb-3">Technical Specifications</h4>
            <dl class="space-y-2">
              <div class="flex justify-between">
                <dt class="text-gray-600">Maximum Load:</dt>
                <dd class="font-medium">{{ selectedCrane.specifications.maxLoad }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Maximum Height:</dt>
                <dd class="font-medium">{{ selectedCrane.specifications.maxHeight }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Working Radius:</dt>
                <dd class="font-medium">{{ selectedCrane.specifications.workingRadius }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Engine Power:</dt>
                <dd class="font-medium">{{ selectedCrane.specifications.enginePower }}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-3">Dimensions</h4>
            <dl class="space-y-2">
              <div class="flex justify-between">
                <dt class="text-gray-600">Length:</dt>
                <dd class="font-medium">{{ selectedCrane.specifications.dimensions.length }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Width:</dt>
                <dd class="font-medium">{{ selectedCrane.specifications.dimensions.width }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Height:</dt>
                <dd class="font-medium">{{ selectedCrane.specifications.dimensions.height }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Weight:</dt>
                <dd class="font-medium">{{ selectedCrane.specifications.weight }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Features and Certifications -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 class="text-lg font-semibold mb-3">Features</h4>
            <ul class="space-y-2">
              <li *ngFor="let feature of selectedCrane.features"
                  class="flex items-center text-gray-700">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-3">Certifications</h4>
            <ul class="space-y-2">
              <li *ngFor="let cert of selectedCrane.certifications"
                  class="flex items-center text-gray-700">
                <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ cert }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Maintenance and Availability -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="text-lg font-semibold mb-3">Maintenance Status</h4>
            <dl class="space-y-2">
              <div class="flex justify-between">
                <dt class="text-gray-600">Last Service:</dt>
                <dd class="font-medium">{{ selectedCrane.maintenance.lastService }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Next Service:</dt>
                <dd class="font-medium">{{ selectedCrane.maintenance.nextService }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Operating Hours:</dt>
                <dd class="font-medium">{{ selectedCrane.maintenance.operatingHours }}</dd>
              </div>
            </dl>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="text-lg font-semibold mb-3">Availability</h4>
            <dl class="space-y-2">
              <div class="flex justify-between">
                <dt class="text-gray-600">Status:</dt>
                <dd class="font-medium text-green-600">{{ selectedCrane.availability.status }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Next Available:</dt>
                <dd class="font-medium">{{ selectedCrane.availability.nextAvailable }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-600">Location:</dt>
                <dd class="font-medium">{{ selectedCrane.availability.location }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Pricing Information -->
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="text-lg font-semibold mb-3">Pricing Information</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center p-3 bg-white rounded-lg">
              <p class="text-gray-600">Hourly Rate</p>
              <p class="text-2xl font-bold text-blue-600">€{{ selectedCrane.pricing.hourlyRate }}</p>
            </div>
            <div class="text-center p-3 bg-white rounded-lg">
              <p class="text-gray-600">Minimum Hours</p>
              <p class="text-2xl font-bold text-blue-600">{{ selectedCrane.pricing.minimumHours }}</p>
            </div>
            <div class="text-center p-3 bg-white rounded-lg">
              <p class="text-gray-600">Transport Fee</p>
              <p class="text-2xl font-bold text-blue-600">€{{ selectedCrane.pricing.transportationFee }}</p>
            </div>
          </div>
        </div>
        <!-- Environmental Impact Section -->
        <div class="mt-6 bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold mb-4 text-green-800">Environmental Impact</h4>

          <!-- CO2 Calculator Form -->
          <div class="mb-6 bg-white rounded-lg p-4 shadow-sm">
            <h5 class="text-md font-medium text-gray-700 mb-3">CO₂ Calculator</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-2">Operating Hours</label>
                <input
                  type="number"
                  [(ngModel)]="operatingHours"
                  (ngModelChange)="calculateEmissions()"
                  class="w-full p-2 border rounded-md"
                  placeholder="Enter hours">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-2">Transport Distance (km)</label>
                <input
                  type="number"
                  [(ngModel)]="transportDistance"
                  (ngModelChange)="calculateEmissions()"
                  class="w-full p-2 border rounded-md"
                  placeholder="Enter distance">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <!-- Basic Metrics -->
            <div class="bg-white rounded-lg p-4 shadow-sm">
              <div class="mb-4">
                <h5 class="text-sm font-medium text-gray-500 mb-1">CO₂ Emissions Per Hour</h5>
                <p class="text-2xl font-bold text-green-600">{{selectedCrane.environmentalImpact.co2PerHour}} kg</p>
              </div>
              <div>
                <h5 class="text-sm font-medium text-gray-500 mb-1">Energy Efficiency Rating</h5>
                <div class="flex items-center">
                  <span class="text-lg font-bold text-green-600">{{selectedCrane.environmentalImpact.energyEfficiencyRating}}</span>
                  <span class="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Eco-Certified</span>
                </div>
              </div>
            </div>

            <!-- Estimated Project Emissions -->
            <div class="bg-white rounded-lg p-4 shadow-sm">
              <h5 class="text-sm font-medium text-gray-500 mb-3">Estimated Project Emissions</h5>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Operation</span>
                  <span class="font-medium">{{calculatedEmissions.operation}} kg CO₂</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Transport</span>
                  <span class="font-medium">{{calculatedEmissions.transport}} kg CO₂</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Setup & Dismantling</span>
                  <span class="font-medium">{{calculatedEmissions.setup}} kg CO₂</span>
                </div>
                <div class="pt-2 mt-2 border-t border-gray-200">
                  <div class="flex justify-between items-center">
                    <span class="font-semibold text-gray-700">Total Estimated</span>
                    <span class="font-bold text-green-600">{{calculatedEmissions.total}} kg CO₂</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
        <div class="mt-6 flex justify-end space-x-4">
          <button class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  (click)="toggleDetails()">
            Close
          </button>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Book Now
          </button>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  styles: []
})
export class CraneSelectorComponent {

  operatingHours: number = 0;
  transportDistance: number = 0;

  calculatedEmissions = {
    operation: 0,
    transport: 0,
    setup: 40, // Fixed setup emissions
    total: 0
  };

  calculateEmissions(): void {
    // Calculate emissions based on input values
    this.calculatedEmissions.operation = this.operatingHours * this.selectedCrane.environmentalImpact.co2PerHour;
    this.calculatedEmissions.transport = this.transportDistance * 0.5; // Assuming 0.5 kg CO2 per km
    this.calculatedEmissions.total =
      this.calculatedEmissions.operation +
      this.calculatedEmissions.transport +
      this.calculatedEmissions.setup;

    // Update the selectedCrane environmental impact
    this.selectedCrane.environmentalImpact.estimatedProjectEmissions = {
      total: this.calculatedEmissions.total,
      breakdown: {
        operation: this.calculatedEmissions.operation,
        transport: this.calculatedEmissions.transport,
        setup: this.calculatedEmissions.setup
      }
    };
  }

  liftDetails: LiftDetails = {
    distance: 0,
    direction: 'left',
    liftType: 'standard'
  };

  specialEquipment: SpecialEquipment[] = [
    { id: 'vacuum-lifter', name: 'Glass Vacuum Lifter', required: false, capacity: '1200kg' },
    { id: 'spreader-beam', name: 'Spreader Beam', required: false },
    { id: 'man-basket', name: 'Man Basket', required: false },
    { id: 'chain-slings', name: 'Chain Slings', required: false }
  ];

  customEquipment: string = '';

  // Fixed method with proper typing
  updateLiftDetails(field: keyof LiftDetails, value: LiftDetails[keyof LiftDetails]): void {
    if (field === 'distance') {
      this.liftDetails.distance = value as number;
    } else if (field === 'direction') {
      this.liftDetails.direction = value as 'left' | 'right' | 'forward' | 'backward';
    } else if (field === 'liftType') {
      this.liftDetails.liftType = value as 'standard' | 'tandem' | 'blind' | 'critical';
    }
  }

  toggleEquipment(id: string): void {
    const equipment = this.specialEquipment.find(e => e.id === id);
    if (equipment) {
      equipment.required = !equipment.required;
    }
  }

  addCustomEquipment(): void {
    if (this.customEquipment.trim()) {
      this.specialEquipment.push({
        id: `custom-${Date.now()}`,
        name: this.customEquipment,
        required: true
      });
      this.customEquipment = '';
    }
  }

  removeEquipment(id: string): void {
    this.specialEquipment = this.specialEquipment.filter(e => e.id !== id);
  }

showDetails: boolean = false;

selectedCrane: CraneDetails = {
  id: 'LTM1100-4.2',
  model: 'Liebherr LTM 1100-4.2',
  specifications: {
    maxLoad: '100 tons',
    maxHeight: '60 meters',
    workingRadius: '50 meters',
    enginePower: '450 kW',
    dimensions: {
      length: '14.2 meters',
      width: '2.75 meters',
      height: '3.95 meters'
    },
    weight: '48 tons'
  },
  features: [
    'Variable outrigger base',
    'Telematic monitoring system',
    'Automatic counterweight detection',
    'ECO drive mode',
    'Wind speed monitoring',
    'Load moment limitation'
  ],
  certifications: [
    'ISO 9001:2015',
    'CE Certified',
    'Annual safety inspection valid until 2025',
    'Environmental compliance certification'
  ],
  maintenance: {
    lastService: '2024-01-15',
    nextService: '2024-04-15',
    operatingHours: 12450
  },
  availability: {
    status: 'Available',
    nextAvailable: 'Immediate',
    location: 'Helsinki Central Depot'
  },
  pricing: {
    hourlyRate: 250,
    minimumHours: 4,
    transportationFee: 500
  },
  environmentalImpact: {
    co2PerHour: 45.5,
    energyEfficiencyRating: 'A+',
    greenCertifications: [
      'ISO 14001 Environmental Management',
      'EU Stage V Emissions Compliant',
      'Green Crane Certification'
    ],
    estimatedProjectEmissions: {
      total: 546,
      breakdown: {
        operation: 364,
        transport: 142,
        setup: 40
      }
    }
  }
};

toggleDetails() {
  this.showDetails = !this.showDetails;
}
}
