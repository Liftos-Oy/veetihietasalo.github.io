import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

interface TimeSlot {
  hour: number;
  available: boolean;
}

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .timeline-container {
      background: linear-gradient(to bottom, #ffffff 97%, #f3f4f6 3%);
      background-size: 100% 48px;
    }

    .time-slot {
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }

    .time-slot:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 10;
      border-color: #93c5fd;
    }

    .time-slot.available {
      background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    }

    .time-slot.unavailable {
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    }

    .equipment-card {
      transition: all 0.3s ease;
    }

    .equipment-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .book-button {
      transition: all 0.2s ease;
    }

    .book-button:hover {
      transform: scale(1.05);
    }

    .status-badge {
      transition: all 0.2s ease;
    }

    .status-badge:hover {
      transform: scale(1.1);
    }
  `],
  template: `
    <div class="container mx-auto p-6">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <!-- Enhanced Header -->
        <div class="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Equipment Availability</h1>
              <p class="text-sm text-gray-500 mt-1">Schedule and manage your equipment bookings</p>
            </div>
            <div class="flex space-x-4">
              <div class="relative">
                <select
                  (change)="filterByDate($event)"
                  class="appearance-none bg-white rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-colors duration-200">
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
              <div class="relative">
                <select
                  (change)="filterByType($event)"
                  class="appearance-none bg-white rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-colors duration-200">
                  <option value="all">All Types</option>
                  <option value="mobile">Mobile Cranes</option>
                  <option value="tower">Tower Cranes</option>
                  <option value="crawler">Crawler Cranes</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Timeline -->
        <div class="overflow-x-auto timeline-container">
          <div class="min-w-max p-6">
            <!-- Hours Header -->
            <div class="flex">
              <div class="w-60 flex-shrink-0"></div>
              <div class="flex flex-1">
                <div *ngFor="let hour of timeSlots"
                     class="w-14 text-center text-sm font-medium text-gray-500">
                  {{hour}}:00
                </div>
              </div>
            </div>

            <!-- Equipment Rows -->
            <div class="mt-6 space-y-4">
              <div *ngFor="let eq of equipment"
                   class="relative group hover:bg-gray-50 rounded-lg transition-colors duration-200 py-2">
                <!-- Equipment Info -->
                <div class="absolute left-0 w-60 flex items-center">
                  <div class="w-12 h-12 rounded-lg overflow-hidden shadow-sm group-hover:shadow transition-shadow duration-200">
                    <img [src]="eq.image" [alt]="eq.name"
                         class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200">
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">{{eq.name}}</div>
                    <div class="text-sm text-gray-500">{{eq.type}}</div>
                  </div>
                </div>

                <!-- Timeline Slots -->
                <div class="ml-60 flex">
                  <div *ngFor="let slot of getTimeSlots(eq)"
                       class="time-slot w-14 h-12 border-r border-gray-100 cursor-pointer"
                       [class.available]="slot.available"
                       [class.unavailable]="!slot.available"
                       [title]="slot.available ? 'Available' : 'Booked'">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Equipment Cards -->
        <div class="p-6 border-t border-gray-200 bg-gray-50">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Available Equipment</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let eq of getAvailableEquipment()"
                 class="equipment-card bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div class="p-4">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center">
                    <div class="relative w-12 h-12 rounded-lg overflow-hidden">
                      <img [src]="eq.image" [alt]="eq.name"
                           class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-200">
                    </div>
                    <div class="ml-3">
                      <h3 class="text-lg font-medium text-gray-900">{{eq.name}}</h3>
                      <p class="text-sm text-gray-500">{{eq.type}}</p>
                    </div>
                  </div>
                  <span class="status-badge px-3 py-1 text-xs font-medium rounded-full shadow-sm"
                        [ngClass]="getStatusColor(eq.status)">
                    {{eq.status}}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-xs text-gray-500 uppercase tracking-wide">Rate</p>
                    <p class="text-lg font-semibold text-gray-900">€{{eq.hourlyRate}}/hour</p>
                  </div>
                  <button (click)="bookEquipment(eq)"
                          class="book-button bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BookingsComponent implements OnInit {
  timeSlots = Array.from({ length: 24 }, (_, i) => i);

  equipment: Equipment[] = [
    {
      id: '1',
      name: 'Liebherr LTM 1100-4.2',
      type: 'Mobile Crane',
      capacity: '100T',
      status: 'Available',
      image: '/assets/crane1.jpg',
      hourlyRate: 250
    },
    {
      id: '2',
      name: 'Grove GMK6400',
      type: 'Mobile Crane',
      capacity: '400T',
      status: 'On Job',
      image: '/assets/crane2.jpg',
      hourlyRate: 450,
      currentJob: {
        id: 'job1',
        startTime: new Date(2024, 9, 25, 8, 0),
        endTime: new Date(2024, 9, 25, 16, 0),
        customer: 'Construction Co',
        status: 'In Progress'
      }
    },
    {
      id: '3',
      name: 'Manitowoc 18000',
      type: 'Crawler Crane',
      capacity: '750T',
      status: 'Available',
      image: '/assets/crane3.jpg',
      hourlyRate: 600
    }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  getTimeSlots(equipment: Equipment): TimeSlot[] {
    return this.timeSlots.map(hour => ({
      hour,
      available: this.isSlotAvailable(equipment, hour)
    }));
  }

  isSlotAvailable(equipment: Equipment, hour: number): boolean {
    if (!equipment.currentJob) return true;

    const now = new Date();
    const slotTime = new Date(now.setHours(hour, 0, 0, 0));
    const jobStart = new Date(equipment.currentJob.startTime);
    const jobEnd = new Date(equipment.currentJob.endTime);

    return slotTime < jobStart || slotTime > jobEnd;
  }

  getAvailableEquipment(): Equipment[] {
    return this.equipment.filter(eq => eq.status === 'Available');
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'On Job':
        return 'bg-blue-100 text-blue-800';
      case 'Maintenance':
        return 'bg-red-100 text-red-800';
      case 'Reserved':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  bookEquipment(equipment: Equipment): void {
    console.log('Booking equipment:', equipment);
    // Implement booking logic
  }

  filterByDate(event: Event): void {
    console.log('Date filter:', (event.target as HTMLSelectElement).value);
    // Implement date filtering
  }

  filterByType(event: Event): void {
    console.log('Type filter:', (event.target as HTMLSelectElement).value);
    // Implement type filtering
  }
}
