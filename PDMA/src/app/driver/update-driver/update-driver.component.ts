import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database/database.service';
import { Router } from '@angular/router';

import type { DriverUpdateDetails } from '../../models/models.d.ts';

@Component({
  selector: 'app-update-driver',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-driver.component.html',
  styleUrl: './update-driver.component.css'
})
export class UpdateDriverComponent {
  constructor(private db: DatabaseService, private router: Router) {}

  driverDetails: DriverUpdateDetails = {
    driverId: '',
    driverDepartment: '',
    driverLicense: ''
  };

  updateDriver(): void {
    // Update driver in database
    this.db.updateDriver(this.driverDetails).subscribe({
      error: (err) => {
        console.log("Error updating driver", err);
        this.router.navigate(['/invalid-data']);
      }
    });

    // Reset form
    this.driverDetails = {
      driverId: '',
      driverDepartment: '',
      driverLicense: ''
    };

    this.router.navigate(['/list-drivers']);
  }
}
