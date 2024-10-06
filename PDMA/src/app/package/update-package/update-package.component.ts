import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database/database.service';
import { Router } from '@angular/router';

import type { PackageUpdateDetails } from '../../models/models.d.ts';

@Component({
  selector: 'app-update-package',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-package.component.html',
  styleUrl: './update-package.component.css'
})
export class UpdatePackageComponent {
  constructor(private db: DatabaseService, private router: Router) {}

  packageDetails: PackageUpdateDetails = {
    packageId: '',
    packageDestination: ''
  };

  updatePackage(): void {
    // Update package in database
    this.db.updatePackage(this.packageDetails).subscribe({
      error: (err) => {
        console.log("Error updating package", err);
        this.router.navigate(['/invalid-data']);
      }
    });

    // Reset form
    this.packageDetails = {
      packageId: '',
      packageDestination: ''
    };

    this.router.navigate(['/list-packages']);
  }
}
