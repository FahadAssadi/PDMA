import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private auth: AuthService) {}

  navLinks = {
    home: routes[0],
    driver: routes.slice(1, 5),
    package: routes.slice(5, 9),
    cloud: routes.slice(9, 12),
    stats: routes[12],
    user: routes.slice(13, 15),
  }

  logout(): void {
    this.auth.logout();
  }
}
