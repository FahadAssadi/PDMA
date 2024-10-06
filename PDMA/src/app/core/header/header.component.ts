import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // ignore the first two routes and the last route
  navLinks: Routes = routes.slice(0, routes.length - 2);

  // Define indices where we want to insert dividers
  dividerIndices: number[] = [0, 4, 8, 11];
}
