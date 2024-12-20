import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service.js';

import { UserDetails } from '../../../shared/models/UserDetails.js';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}

  userDetails: UserDetails = new UserDetails();
  confirmPassword: string = '';

  register(): void {
    // Check if passwords match
    if (this.userDetails.password !== this.confirmPassword || this.userDetails.password === '') {
      console.error('Passwords do not match');
      this.router.navigate(['/invalid-data']);
      return;
    }

    this.auth.register(this.userDetails)
      .then(() => {
        console.log('Registration successful');
        
        // Navigate to login on successful registration
        this.router.navigate(['/login']);  
      })
      .catch((err) => {
        console.error('Registration failed:', err);

        // Navigate to error page on failure
        this.router.navigate(['/invalid-data']);  
      });
  }
}
