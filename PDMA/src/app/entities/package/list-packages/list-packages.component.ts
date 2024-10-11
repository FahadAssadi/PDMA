import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { KgToGPipe } from '../../../shared/pipes/kg-to-g/kg-to-g.pipe';
import { ListDriversComponent } from '../../driver/list-drivers/list-drivers.component';
import { TableTemplateComponent } from '../../../shared/templates/table-template/table-template.component';

import type { TableAction } from '../../../shared/models/models';
import type { TableHeader } from '../../../shared/models/models';
import type { Package } from '../../../shared/models/Package';
import { Driver } from '../../../shared/models/Driver';
import { StringToUpperPipe } from '../../../shared/pipes/string-to-upper/string-to-upper.pipe';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [TableTemplateComponent, KgToGPipe, StringToUpperPipe, ListDriversComponent],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  @Input() packages: Package[] | null = null;

  driverAssigned: Driver = new Driver();
  isViewingPackage: boolean = false;

  // Table Related Info
  tableHeaders: TableHeader[] = [];
  tableActions: TableAction[] = [];

  constructor(private db: DatabaseService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // If packages are not provided, get them from the database
    if (this.packages === null) {
      this.getPackages();
    }

    // Update table data
    this.tableHeaders = [
      { key: 'packageId', label: 'ID' },
      { key: 'packageTitle', label: 'Title' },
      { key: 'packageWeight', label: 'Weight' },
      { key: 'packageDestination', label: 'Destination' },
      { key: 'packageIsAllocated', label: 'Is Allocated' },
      { key: 'packageCreatedAt', label: 'Created At' }
    ];
    this.tableActions = [
      {
        label: 'View',
        style: 'btn btn-primary',
        function: (pkg: Package) => this.viewPackage(pkg)
      }
    ];
  }

  getPackages(): void {
    this.db.getPackages().subscribe((packages) => {
      this.packages = packages;
    });
  }

  viewPackage(pkg: Package): void {
    this.isViewingPackage = true;
    this.driverAssigned = pkg.driverId;

    console.log('Viewing Package:', this.driverAssigned);

    this.cd.detectChanges();
  }
}
