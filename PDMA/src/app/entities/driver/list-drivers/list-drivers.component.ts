import { Component, Input, ChangeDetectorRef  } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { StringToUpperPipe } from '../../../shared/pipes/string-to-upper/string-to-upper.pipe';
import { TableTemplateComponent } from '../../../shared/templates/table-template/table-template.component';
import { ListPackagesComponent } from '../../package/list-packages/list-packages.component';

import { Driver } from '../../../shared/models/Driver';
import type { Package } from '../../../shared/models/Package';
import type { TableAction, TableHeader } from '../../../shared/models/models';

@Component({
  selector: 'app-list-drivers',
  standalone: true,
  imports: [TableTemplateComponent, StringToUpperPipe, ListPackagesComponent],
  templateUrl: './list-drivers.component.html',
  styleUrl: './list-drivers.component.css'
})
export class ListDriversComponent {
  // Drivers Related Info
  @Input() drivers: Driver[] | null = null;

  // Table Related Info
  tableHeaders: TableHeader[] = [];
  @Input() tableActions: TableAction[] = [];

  isViewingDriver: boolean = false;
  assignedPackages: Package[] = [ ];

  constructor(private db: DatabaseService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // If drivers are not provided, get them from the database
    if (this.drivers === null) {
      this.getDrivers();
    }

    // Update table data
    this.tableHeaders = [
      { key: 'driverId', label: 'ID' },
      { key: 'driverName', label: 'Name' },
      { key: 'driverDepartment', label: 'Department' },
      { key: 'driverLicense', label: 'License' },
      { key: 'driverIsActive', label: 'Is Active' },
      { key: 'driverCreatedAt', label: 'Created At' }
    ];
    this.tableActions.unshift(
      {
        label: 'View',
        style: 'btn btn-primary',
        function: (driver: Driver) => this.viewDriver(driver)
      }
    );
  }

  getDrivers(): void {
    this.db.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }

  viewDriver(driver: Driver): void {
    this.assignedPackages = [...driver.assignedPackages];
    this.isViewingDriver = true;

    console.log(this.assignedPackages);

    this.cd.detectChanges();
  }
}
