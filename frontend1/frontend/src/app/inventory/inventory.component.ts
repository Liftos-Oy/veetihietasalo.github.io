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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- Add other Stats Cards here -->
      </div>

      <div class="filters flex space-x-4 mb-4">
        <!-- Search -->
        <input [(ngModel)]="searchText" type="text" class="border p-2 rounded" placeholder="Search by name or type" />

        <!-- Type Filter -->
        <select [(ngModel)]="selectedType" class="border p-2 rounded">
          <option value="">All Types</option>
          <option value="Mobile Crane">Mobile Crane</option>
          <option value="Crawler Crane">Crawler Crane</option>
          <option value="Tower Crane">Tower Crane</option>
        </select>

        <!-- Status Filter -->
        <select [(ngModel)]="selectedStatus" class="border p-2 rounded">
          <option value="">All Status</option>
          <option value="Available">Available</option>
          <option value="In Use">In Use</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Reserved">Reserved</option>
        </select>

        <!-- Location Filter -->
        <select [(ngModel)]="selectedLocation" class="border p-2 rounded">
          <option value="">All Locations</option>
          <option value="Helsinki">Helsinki</option>
          <option value="Espoo">Espoo</option>
          <option value="Tampere">Tampere</option>
        </select>

        <!-- Clear Filters Button -->
        <button (click)="clearFilters()" class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Clear Filters
        </button>
      </div>


      <!-- Inventory List -->
      <div class="inventory-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let item of inventoryData" class="inventory-item bg-white p-4 shadow rounded-lg">
          <img [src]="item.image" [alt]="item.name" class="w-full rounded-lg mb-4" />
          <h2 class="text-lg font-bold text-gray-800">{{ item.name }}</h2>
          <p class="text-sm text-gray-600">{{ item.type }}</p>
          <p class="text-sm text-gray-600 font-bold">Status: {{ item.status }}</p>
        </div>
      </div>
    </div>

    <div class="pagination flex justify-center items-center mt-4 space-x-2">
      <!-- Previous Page Button -->
      <button
        (click)="changePage(currentPage - 1)"
        [disabled]="currentPage === 1"
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Previous
      </button>

      <!-- Page Numbers -->
      <span *ngFor="let page of [].constructor(totalPages); let i = index"
            [ngClass]="{'font-bold': currentPage === i + 1}"
            (click)="changePage(i + 1)"
            class="cursor-pointer px-3 py-1 rounded hover:bg-gray-300">
    {{ i + 1 }}
  </span>

      <!-- Next Page Button -->
      <button
        (click)="changePage(currentPage + 1)"
        [disabled]="currentPage === totalPages"
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  `
})

export class InventoryComponent {

  inventoryData: InventoryItem[] = [
    {
      id: 'CR001',
      image: 'assets/images/tower-crane.jpg',
      // Updated path
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
      image: 'assets/images/crawler-crane.jpg', // Fixed path
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
      image: 'assets/images/mobile-crane.jpg',
      // Updated image path
      name: 'Potain MCT 85',
      type: 'Tower Crane',
      status: 'Maintenance',
      location: 'Vantaa',
      capacity: '85 tons',
      lastService: '2024-03-01',
      utilization: 45
    },
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
