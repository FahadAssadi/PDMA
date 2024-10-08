import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { Router } from '@angular/router';

import { DriverUpdateDetails } from '../../../shared/models/Driver';

@Component({
  selector: 'app-update-driver',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-driver.component.html',
  styleUrl: './update-driver.component.css'
})
export class UpdateDriverComponent {
  constructor(private db: DatabaseService, private router: Router) {}

  driverDetails: DriverUpdateDetails = new DriverUpdateDetails();

  updateDriver(): void {
    // Update driver in database
    this.db.updateDriver(this.driverDetails).subscribe({
      error: (err) => {
        console.log("Error updating driver", err);
        this.router.navigate(['/invalid-data']);
      }
    });

    this.router.navigate(['/list-drivers']);
  }
}
