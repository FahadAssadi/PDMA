import { Component, Input } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { StringToUpperPipe } from '../../../shared/pipes/string-to-upper/string-to-upper.pipe';
import { ListPackagesComponent } from '../../package/list-packages/list-packages.component';

import type { Driver } from '../../../shared/models/Driver';
import type { Package } from '../../../shared/models/Package';

@Component({
  selector: 'app-list-drivers',
  standalone: true,
  imports: [StringToUpperPipe, ListPackagesComponent],
  templateUrl: './list-drivers.component.html',
  styleUrl: './list-drivers.component.css'
})
export class ListDriversComponent {
  drivers: Driver[] = [];

  @Input() packageKaDrivers: any = 0;

  packages: Package[] = [];
  isViewingDriver: boolean = false;

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    // If drivers are not provided, get them from the database
    if (!this.drivers.length) {
      this.getDrivers();
    }
  }

  getDrivers(): void {
    this.db.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }

  viewDriver(_id: string): void {
    const driver: Driver | undefined = this.drivers.find((driver) => driver._id === _id);
    this.isViewingDriver = true;

    if (driver) {
      this.packages = driver.assignedPackages;
    } else {
      this.packages = [];
    }
  }
}
