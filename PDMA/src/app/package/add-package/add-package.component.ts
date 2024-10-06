import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database/database.service';
import { Router } from '@angular/router';

import type { Package } from '../../models/models';
import type { Driver } from '../../models/models';

@Component({
  selector: 'app-add-package',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-package.component.html',
  styleUrl: './add-package.component.css'
})
export class AddPackageComponent {
  drivers: Driver[] = [];

  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.db.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }

  package: Package = {
    _id: '',
    packageId: '',
    packageTitle: '',
    packageDescription: '',
    packageDestination: '',
    packageWeight: 0,
    driverId: '',
    packageIsAllocated: false,
    packageCreatedAt: ''
  };

  addPackage(): void {
    // Add package to database
    this.db.createPackage(this.package).subscribe({
      error: (err) => {
        console.log("Error adding package", err);
        this.router.navigate(['/invalid-data']);
      }
    });

    // Reset form
    this.package = {
      _id: '',
      packageId: '',
      packageTitle: '',
      packageDescription: '',
      packageDestination: '',
      packageWeight: 0,
      driverId: '',
      packageIsAllocated: false,
      packageCreatedAt: ''
    };

    this.router.navigate(['/list-packages']);
  }
}
