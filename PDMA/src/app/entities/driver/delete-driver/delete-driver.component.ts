import { Component } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { StringToUpperPipe } from '../../../shared/pipes/string-to-upper/string-to-upper.pipe';

import { Driver } from '../../../shared/models/Driver';
import { TableHeader, TableAction } from '../../../shared/models/models';
import { TableTemplateComponent } from '../../../shared/templates/table-template/table-template.component';


@Component({
  selector: 'app-delete-driver',
  standalone: true,
  imports: [ StringToUpperPipe, TableTemplateComponent],
  templateUrl: './delete-driver.component.html',
  styleUrl: './delete-driver.component.css'
})
export class DeleteDriverComponent {
  drivers: Driver[] = [];

  // Table Related Info
  tableHeaders: TableHeader[] = [];
  tableData: any[] = [];
  tableActions: TableAction[] = [];

  constructor(private db: DatabaseService) {} 

  ngOnInit(): void {
    this.getDrivers();

    // Update table data
    this.tableHeaders = [
      { key: 'driverId', label: 'ID' },
      { key: 'driverName', label: 'Name' },
      { key: 'driverDepartment', label: 'Department' },
      { key: 'driverLicense', label: 'License' },
      { key: 'driverIsActive', label: 'Is Active' },
      { key: 'driverCreatedAt', label: 'Created At' }
    ];
    this.tableActions = [
      {
        label: 'X',
        style: 'btn btn-danger',
        function: (driver: Driver) => this.deleteDriver(driver._id)
      }
    ];
  }

  getDrivers(): void {
    this.db.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;

      this.tableData = this.drivers;
    });
  }

  deleteDriver(driverId: string): void {
    this.db.deleteDriver(driverId).subscribe(() => {
      this.getDrivers();
    });
  }
}
