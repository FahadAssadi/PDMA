import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../database/database.service';
import type { Package } from '../../models/models';

@Component({
  selector: 'app-add-package',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-package.component.html',
  styleUrl: './add-package.component.css'
})
export class AddPackageComponent {
  constructor(private db: DatabaseService) {}

  package: Package = {
    packageTitle: '',
    packageDescription: '',
    packageDestination: '',
    packageWeight: 0,
    driverId: '',
    packageIsAllocated: false
  };

  addPackage() {
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
