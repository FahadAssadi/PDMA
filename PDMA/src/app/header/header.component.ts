import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type NavLink = {
  label: string,
  url: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navLinks: NavLink[] = [
    { label: 'Add Driver', url: '/33328366/Fahad/driver/add' },
    { label: 'List Drivers', url: '/33328366/Fahad/driver/list' },
    { label: 'List Drivers/Department', url: '/33328366/Fahad/driver/pick-department' },
    { label: 'Delete Drivers', url: '/33328366/Fahad/driver/delete' },
    { label: 'Add Package', url: '/33328366/Fahad/package/add' },
    { label: 'List Packages', url: '/33328366/Fahad/package/list' },
    { label: 'Delete Package', url: '/33328366/Fahad/package/delete' },
    { label: 'Stats for Nerds', url: '/33328366/Fahad/stats' },
    { label: 'Login', url: '/33328366/Fahad/auth/login' }
  ];

  // Define indices where we want to insert dividers
  dividerIndices: number[] = [3, 6];
}
