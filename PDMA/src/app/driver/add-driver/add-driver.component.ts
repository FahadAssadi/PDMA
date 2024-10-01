import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database/database.service';
import type { Driver } from '../../models/models.d.ts';

@Component({
  selector: 'app-add-driver',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './add-driver.component.html',
  styleUrl: './add-driver.component.css'
})
export class AddDriverComponent {
  constructor(private db: DatabaseService) {}

  driver: Driver = {
    driverId: '',
    driverName: '',
    driverDepartment: '',
    driverLicense: '',
    driverIsActive: false
  };

  addDriver(): void {
    console.log(this.driver);

    // Add driver to database
    this.db.createDriver(this.driver).subscribe((data) => {
      console.log(data);
    });

    // Reset form
    this.driver = {
      driverId: '',
      driverName: '',
      driverDepartment: '',
      driverLicense: '',
      driverIsActive: false
    };
  }
}
