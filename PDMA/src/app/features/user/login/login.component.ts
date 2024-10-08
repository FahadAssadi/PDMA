import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service.js';
import { Router, RouterModule } from '@angular/router';

import { UserDetails } from '../../shared/models/UserDetails.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  userDetails: UserDetails = new UserDetails();

  login(): void {
    this.auth.login(this.userDetails)
      .then(() => {
        console.log('Login successful');
        
        // Navigate to home on successful login
        this.router.navigate(['/']);  
      })
      .catch((err) => {
        console.error('Login failed:', err);

        // Navigate to error page on failure
        this.router.navigate(['/invalid-data']);  
      });
  }
}
