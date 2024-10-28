// File: src/app/inventory/inventory.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface InventoryItem {
  id: string;
  image: string;
  name: string;
  type: string;
  status: 'Available' | 'In Use' | 'Maintenance' | 'Reserved';
  location: string;
  capacity: string;
  lastService: string;
  utilization: number;
}

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto p-6">
      <!-- Header Section -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Crane Inventory</h1>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          <span>Add New Crane</span>
        </button>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div class="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-500 text-sm">Total Cranes</p>
              <p class="text-2xl font-bold">24</p>
            </div>
            <div class="p-3 bg-blue-100 rounded-full">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-500 text-sm">Available</p>
              <p class="text-2xl font-bold">16</p>
            </div>
            <div class="p-3 bg-green-100 rounded-full">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-500 text-sm">In Use</p>
              <p class="text-2xl font-bold">5</p>
            </div>
            <div class="p-3 bg-yellow-100 rounded-full">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-4 border-l-4 border-red-500">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-500 text-sm">Maintenance</p>
              <p class="text-2xl font-bold">3</p>
            </div>
            <div class="p-3 bg-red-100 rounded-full">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-lg shadow mb-6">
        <div class="p-4">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <input type="text" placeholder="Search cranes..."
                     class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
            </div>
            <div>
              <select class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                <option value="">All Types</option>
                <option value="mobile">Mobile Crane</option>
                <option value="tower">Tower Crane</option>
                <option value="crawler">Crawler Crane</option>
              </select>
            </div>
            <div>
              <select class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                <option value="">All Statuses</option>
                <option value="available">Available</option>
                <option value="in-use">In Use</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div>
              <select class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                <option value="">All Locations</option>
                <option value="helsinki">Helsinki</option>
                <option value="espoo">Espoo</option>
                <option value="vantaa">Vantaa</option>
              </select>
            </div>
            <div>
              <button class="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-lg">
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Inventory Table -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crane</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Service</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilization</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr *ngFor="let item of inventoryData" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-lg object-cover"
                       [src]="getPlaceholderImage(item.id)"
                       [alt]="item.name">
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{item.name}}</div>
                  <div class="text-sm text-gray-500">{{item.type}}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                      [ngClass]="getStatusColor(item.status)">
                  {{item.status}}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{item.location}}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{item.capacity}}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{item.lastService}}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="w-32 h-2 bg-gray-200 rounded-full mr-2">
                  <div class="h-full rounded-full"
                       [ngClass]="getUtilizationColor(item.utilization)"
                       [style.width.%]="item.utilization"></div>
                </div>
                <span class="text-sm text-gray-500">{{item.utilization}}%</span>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button class="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
              <button class="text-gray-600 hover:text-gray-900">View</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})

export class InventoryComponent {

  getPlaceholderImage(id: string): string {
    return `https://via.placeholder.com/100x100.png?text=Crane+${id}`;
  }

  inventoryData: InventoryItem[] = [
    {
      id: 'CR001',
      image: '/assets/crane1.jpg',  // You'll need to add these images
      name: 'Liebherr LTM 1500',
      type: 'Mobile Crane',
      status: 'Available',
      location: 'Helsinki',
      capacity: '500 tons',
      lastService: '2024-02-15',
      utilization: 78
    },
    {
      id: 'CR002',
      image: '/assets/crane2.jpg',
      name: 'Manitowoc 18000',
      type: 'Crawler Crane',
      status: 'In Use',
      location: 'Espoo',
      capacity: '750 tons',
      lastService: '2024-01-20',
      utilization: 92
    },

    {
      id: 'CR003',
      image: '/assets/crane3.jpg',
      name: 'Potain MCT 85',
      type: 'Tower Crane',
      status: 'Maintenance',
      location: 'Vantaa',
      capacity: '85 tons',
      lastService: '2024-03-01',
      utilization: 45
    },
    {
      id: 'CR004',
      image: '/assets/crane4.jpg',
      name: 'Grove GMK6400',
      type: 'Mobile Crane',
      status: 'Available',
      location: 'Tampere',
      capacity: '400 tons',
      lastService: '2024-02-28',
      utilization: 65
    },
    {
      id: 'CR005',
      image: '/assets/crane5.jpg',
      name: 'Liebherr LR 1300',
      type: 'Crawler Crane',
      status: 'Reserved',
      location: 'Turku',
      capacity: '300 tons',
      lastService: '2024-03-10',
      utilization: 88
    }
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'In Use':
        return 'bg-blue-100 text-blue-800';
      case 'Maintenance':
        return 'bg-red-100 text-red-800';
      case 'Reserved':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getUtilizationColor(utilization: number): string {
    if (utilization >= 90) {
      return 'bg-red-500';
    } else if (utilization >= 70) {
      return 'bg-green-500';
    } else if (utilization >= 50) {
      return 'bg-yellow-500';
    } else {
      return 'bg-gray-500';
    }
  }

  // Add search and filter functionality
  searchText: string = '';
  selectedType: string = '';
  selectedStatus: string = '';
  selectedLocation: string = '';

  clearFilters(): void {
    this.searchText = '';
    this.selectedType = '';
    this.selectedStatus = '';
    this.selectedLocation = '';
  }

  get filteredInventory(): InventoryItem[] {
    return this.inventoryData.filter(item => {
      const matchesSearch = !this.searchText ||
        item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        item.type.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesType = !this.selectedType ||
        item.type === this.selectedType;

      const matchesStatus = !this.selectedStatus ||
        item.status === this.selectedStatus;

      const matchesLocation = !this.selectedLocation ||
        item.location === this.selectedLocation;

      return matchesSearch && matchesType && matchesStatus && matchesLocation;
    });
  }

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;

  get totalPages(): number {
    return Math.ceil(this.filteredInventory.length / this.itemsPerPage);
  }

  get paginatedInventory(): InventoryItem[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredInventory.slice(start, end);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
