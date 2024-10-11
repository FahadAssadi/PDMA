import { ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { KgToGPipe } from '../../../shared/pipes/kg-to-g/kg-to-g.pipe';
import { ListDriversComponent } from '../../driver/list-drivers/list-drivers.component';

import type { TableAction } from '../../../shared/models/models';
import type { Package } from '../../../shared/models/Package';
import type { Driver } from '../../../shared/models/Driver';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [ KgToGPipe, forwardRef(() => ListDriversComponent) ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  @Input() packages: Package[] | null = null;

  driverAssigned: Driver[] | null = null;
  isViewingPackage: boolean = false;

  // Table Related Info
  @Input() tableActions: TableAction[] | null = null;

  constructor(private db: DatabaseService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // If packages are not provided, get them from the database
    if (this.packages === null) {
      this.getPackages();
    }

    // If table actions are not provided, set them up
    if (this.tableActions === null) {
      this.tableActions = [
        {
          label: 'View', style: 'btn btn-primary',
          function: (pkg: Package) => this.viewPackage(pkg)
        }
      ];
    }
  }

  getPackages(): void {
    this.db.getPackages().subscribe((packages) => {
      this.packages = packages;
    });
  }

  viewPackage(pkg: Package): void {
    this.isViewingPackage = true;
    this.driverAssigned = [pkg.driverId];

    this.cd.detectChanges();
  }
}
