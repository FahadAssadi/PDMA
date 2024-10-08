import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database/database.service';
import { Router } from '@angular/router';

import { PackageUpdateDetails } from '../../models/Package';

@Component({
  selector: 'app-update-package',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-package.component.html',
  styleUrl: './update-package.component.css'
})
export class UpdatePackageComponent {
  constructor(private db: DatabaseService, private router: Router) {}

  packageDetails: PackageUpdateDetails = new PackageUpdateDetails();

  updatePackage(): void {
    // Update package in database
    this.db.updatePackage(this.packageDetails).subscribe({
      error: (err) => {
        console.log("Error updating package", err);
        this.router.navigate(['/invalid-data']);
      }
    });

    this.router.navigate(['/list-packages']);
  }
}
