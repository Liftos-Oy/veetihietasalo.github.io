import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserType = 'supplier' | 'customer' | null;

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private userTypeSubject = new BehaviorSubject<UserType>(null);
  userType$ = this.userTypeSubject.asObservable();

  setUserType(type: UserType) {
    this.userTypeSubject.next(type);
  }

  getUserType(): UserType {
    return this.userTypeSubject.value;
  }

  clearUserType() {
    this.userTypeSubject.next(null);
  }
}
