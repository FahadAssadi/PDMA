import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service.js';
import { Router, RouterModule } from '@angular/router';

import type { UserDetails } from '../../models/models.d.ts';
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

  userDetails: UserDetails = {
    username: '',
    password: ''
  };

  login(): void {
    this.auth.login(this.userDetails)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/']);  // Navigate to home on success
      })
      .catch((err) => {
        console.error('Login failed:', err);
        this.router.navigate(['/invalid-data']);  // Navigate to error page on failure
      });
  }
}
