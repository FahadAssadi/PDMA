import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database/database.service';
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

  constructor(private db: DatabaseService) {
    this.db.getDrivers().subscribe((data) => {
      this.drivers = data;
    });
  }

  package: Package = {
    packageTitle: '',
    packageDescription: '',
    packageDestination: '',
    packageWeight: 0,
    driverId: '',
    packageIsAllocated: false
  };

  addPackage(): void {
    // Add package to database
    this.db.createPackage(this.package).subscribe((data) => {
      console.log(data);
    });

    // Reset form
    this.package = {
      packageTitle: '',
      packageDescription: '',
      packageDestination: '',
      packageWeight: 0,
      driverId: '',
      packageIsAllocated: false
    };
  }
}
