import { Component } from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';

interface Equipment {
  id: string;
  name: string;
  type: string;
  capacity: string;
  status: 'Available' | 'On Job' | 'Maintenance' | 'Reserved';
  currentJob?: JobAssignment;
  nextAvailable?: Date;
  image: string;
  hourlyRate: number;
}

interface JobAssignment {
  id: string;
  startTime: Date;
  endTime: Date;
  customer: string;
  status: 'In Progress' | 'Scheduled' | 'Completed';
}

@Component({
  selector: 'app-bookings',
  standalone: true,
  template: `
    <div class="container mx-auto p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Equipment Availability</h1>
      <p class="text-sm text-gray-500 mb-8">Schedule and manage your equipment bookings.</p>

      <!-- Equipment Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let equipment of equipmentData" class="equipment-card border rounded-lg shadow-lg p-4 bg-white">
          <!-- Equipment Image -->
          <img [src]="equipment.image" [alt]="equipment.name" class="w-full h-48 object-cover rounded-t-lg mb-4">

          <!-- Equipment Details -->
          <h2 class="text-lg font-bold text-gray-800">{{ equipment.name }}</h2>
          <p class="text-sm text-gray-500">Type: {{ equipment.type }}</p>
          <p class="text-sm text-gray-500">Capacity: {{ equipment.capacity }}</p>
          <p class="text-sm font-bold mt-2"
             [ngClass]="{
               'text-green-600': equipment.status === 'Available',
               'text-red-600': equipment.status === 'On Job',
               'text-yellow-600': equipment.status === 'Maintenance',
               'text-blue-600': equipment.status === 'Reserved'
             }">
            Status: {{ equipment.status }}
          </p>

          <!-- Hourly Rate -->

          <!-- Availability -->
          <p *ngIf="equipment.nextAvailable" class="text-sm text-gray-500">
            Next Available: {{ equipment.nextAvailable | date }}
          </p>
          <p *ngIf="equipment.currentJob" class="text-sm text-gray-500">
            Current Job: {{ equipment.currentJob.customer }} ({{ equipment.currentJob.status }})
          </p>

          <!-- Book Button -->
          <button *ngIf="equipment.status === 'Available'"
                  class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg book-button">
            Put to work
          </button>
        </div>
      </div>
    </div>
  `,
  imports: [
    NgClass,
    NgIf,
    DatePipe,
    NgForOf
  ],
  styles: [`
    /* Layout Styles */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .grid {
      display: grid;
      gap: 20px;
    }

    /* Equipment Card */
    .equipment-card {
      border: 1px solid #e5e7eb; /* Light gray border */
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .equipment-card:hover {
      transform: translateY(-4px); /* Lift on hover */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Deeper shadow */
    }

    /* Equipment Image */
    .equipment-card img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      object-fit: cover;
      max-height: 200px;
    }

    /* Status Styling */
    .text-green-600 {
      color: #16a34a; /* Green for available */
    }

    .text-red-600 {
      color: #dc2626; /* Red for on job */
    }

    .text-yellow-600 {
      color: #d97706; /* Yellow for maintenance */
    }

    .text-blue-600 {
      color: #2563eb; /* Blue for reserved */
    }

    /* Book Button */
    .book-button {
      background-color: #2563eb; /* Primary blue */
      color: white;
      padding: 10px 16px;
      border-radius: 6px;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .book-button:hover {
      background-color: #1d4ed8; /* Darker blue on hover */
      transform: translateY(-2px); /* Slight lift */
    }
  `]
})
export class BookingsComponent {
  // Equipment data with the provided images.
  equipmentData: Equipment[] = [
    {
      id: 'EQ001',
      name: 'Mobile Crane',
      type: 'Truck Mounted Crane',
      capacity: '250 tons',
      status: 'Available',
      nextAvailable: new Date('2024-03-01'),
      image: 'assets/images/mobile-crane.jpg',
      hourlyRate: 200
    },
    {
      id: 'EQ002',
      name: 'Crawler Crane',
      type: 'Crawler Crane',
      capacity: '400 tons',
      status: 'On Job',
      currentJob: {
        id: 'JOB002',
        startTime: new Date('2024-03-01'),
        endTime: new Date('2024-03-05'),
        customer: 'XYZ Constructions',
        status: 'In Progress'
      },
      image: 'assets/images/crawler-crane.jpg',
      hourlyRate: 250
    },
    {
      id: 'EQ003',
      name: 'Tower Crane',
      type: 'Tower Crane',
      capacity: '300 tons',
      status: 'Maintenance',
      image: 'assets/images/tower-crane.jpg',
      hourlyRate: 180
    }
  ];
}
