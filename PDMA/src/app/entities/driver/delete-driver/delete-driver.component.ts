import { Component } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { StringToUpperPipe } from '../../../shared/pipes/string-to-upper/string-to-upper.pipe';

import { Driver } from '../../../shared/models/Driver';


@Component({
  selector: 'app-delete-driver',
  standalone: true,
  imports: [ StringToUpperPipe],
  templateUrl: './delete-driver.component.html',
  styleUrl: './delete-driver.component.css'
})
export class DeleteDriverComponent {
  drivers: Driver[] = [];

  constructor(private db: DatabaseService) {} 

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(): void {
    this.db.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }

  deleteDriver(driverId: string): void {
    // Delete driver from database
    this.db.deleteDriver(driverId).subscribe((data) => {
      this.drivers = this.drivers.filter((driver) => driver._id !== driverId);
    });
  }
}
