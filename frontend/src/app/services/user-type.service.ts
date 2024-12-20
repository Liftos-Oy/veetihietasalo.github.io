import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private userType: string | null = null;
  private userTypeSubject = new BehaviorSubject<string | null>(null);
  userType$ = this.userTypeSubject.asObservable();

  constructor() {
    try {
      // Only try to access localStorage if it exists
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = window.localStorage.getItem('userType');
        if (stored) {
          this.userType = stored;
          this.userTypeSubject.next(stored);
        }
      }
    } catch {
      // Ignore any errors accessing localStorage
      console.warn('LocalStorage not available');
    }
  }

  setUserType(type: 'supplier' | 'customer'): void {
    this.userType = type;
    this.userTypeSubject.next(type);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('userType', type);
      }
    } catch {
      // Ignore localStorage errors
    }
  }

  getUserType(): string | null {
    return this.userType;
  }

  clearUserType(): void {
    this.userType = null;
    this.userTypeSubject.next(null);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('userType');
      }
    } catch {
      // Ignore localStorage errors
    }
  }
}
