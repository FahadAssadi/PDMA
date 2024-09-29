import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  navLinks = routes.slice(2, routes.length - 1);

  // Define indices where we want to insert dividers
  dividerIndices: number[] = [3, 7];
}
