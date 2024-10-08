import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';

import { UserDetails } from '../../models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private db: DatabaseService) { }

  register(data: UserDetails): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.register(data).subscribe({
        next: () => {
          resolve();
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  }

  login(data: UserDetails): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.login(data).subscribe({
        next: () => {
          this.isAuthenticated = true;
          localStorage.setItem('user', JSON.stringify(data));
          resolve();
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('user');
  }
}
