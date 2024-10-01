import { Component } from '@angular/core';
import { DatabaseService } from '../../shared/services/database/database.service';
import type { Driver } from '../../models/models.d.ts';

@Component({
  selector: 'app-list-drivers',
  standalone: true,
  imports: [ DatabaseService ],
  templateUrl: './list-drivers.component.html',
  styleUrl: './list-drivers.component.css'
})
export class ListDriversComponent {
  drivers: Driver[] = [];

  constructor(private db: DatabaseService) {
    this.db.getDrivers().subscribe((data) => {
      this.drivers = data;
    });
  }

  deleteDriver(id: string): void {
    this.db.deleteDriver(id).subscribe(() => {
      this.drivers = this.drivers.filter((driver) => driver.driverId !== id);
    });
  }

}
