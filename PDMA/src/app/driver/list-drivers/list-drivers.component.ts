import { Component } from '@angular/core';
import { DatabaseService } from '../../shared/services/database/database.service';
import { StringToUpperPipe } from '../../shared/pipes/string-to-upper/string-to-upper.pipe';
import { ListPackagesComponent } from '../../package/list-packages/list-packages.component';

import type { Driver } from '../../models/models.d.ts';
import type { Package } from '../../models/models.d.ts';

@Component({
  selector: 'app-list-drivers',
  standalone: true,
  imports: [StringToUpperPipe, ListPackagesComponent],
  templateUrl: './list-drivers.component.html',
  styleUrl: './list-drivers.component.css'
})
export class ListDriversComponent {
  drivers: Driver[] = [];

  isViewingDriver: boolean = false;
  packages: Package[] = [];

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(): void {
    this.db.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }

  viewDriver(_id: string): void {
    const driver = this.drivers.find((driver) => driver._id === _id);
    this.isViewingDriver = true;

    if (driver) {
      this.packages = driver.assignedPackages;
    } else {
      this.packages = [];
    }
  }
}
