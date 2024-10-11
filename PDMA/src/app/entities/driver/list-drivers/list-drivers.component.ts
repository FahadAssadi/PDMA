import { Component, EventEmitter, Input } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { StringToUpperPipe } from '../../../shared/pipes/string-to-upper/string-to-upper.pipe';
import { ListPackagesComponent } from '../../package/list-packages/list-packages.component';

import { Driver } from '../../../shared/models/Driver';
import type { Package } from '../../../shared/models/Package';
import type { TableAction } from '../../../shared/models/models';

@Component({
  selector: 'app-list-drivers',
  standalone: true,
  imports: [StringToUpperPipe, ListPackagesComponent],
  templateUrl: './list-drivers.component.html',
  styleUrl: './list-drivers.component.css'
})
export class ListDriversComponent {
  // Drivers Related Info
  @Input() drivers: Driver[] | null = null;

  // Table Related Info
  @Input() tableActions: TableAction[] | null = null;

  isViewingDriver: boolean = false;
  assignedPackages: Package[] = [];

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    // If drivers are not provided, get them from the database
    if (this.drivers === null) {
      this.getDrivers();
    }

    // If table actions are not provided, set them up
    if (this.tableActions === null) {
      this.tableActions = [
        { 
          label: 'View', style: 'btn btn-primary',
          function: (driver: Driver) => this.viewDriver(driver)
        }
      ];
    } 
  }

  getDrivers(): void {
    this.db.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }

  viewDriver(driver: Driver): void {
    this.assignedPackages = driver.assignedPackages;
    this.isViewingDriver = true;
  }
}
