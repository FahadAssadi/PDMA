import { Component } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { ListDriversComponent } from '../list-drivers/list-drivers.component';

import type { Driver } from '../../../shared/models/Driver';
import type { TableAction } from '../../../shared/models/models';

@Component({
  selector: 'app-delete-driver',
  standalone: true,
  imports: [ ListDriversComponent ],
  templateUrl: './delete-driver.component.html',
  styleUrl: './delete-driver.component.css'
})
export class DeleteDriverComponent {
  // Table Related Info
  tableActions: TableAction[] | null = null;

  constructor(private db: DatabaseService) {} 

  ngOnInit(): void {
    this.tableActions = [
      {
        label: 'X',
        style: 'btn btn-danger',
        function: (driver: Driver) => this.deleteDriver(driver._id)
      }
    ];
  }

  deleteDriver(driverId: string): void {
    this.db.deleteDriver(driverId).subscribe(() => {
    });
  }
}
