import { Component, Input } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { KgToGPipe } from '../../../shared/pipes/kg-to-g/kg-to-g.pipe';
import { ListDriversComponent } from '../../driver/list-drivers/list-drivers.component';

import type { Package } from '../../../shared/models/Package';
import type { Driver } from '../../../shared/models/Driver';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [KgToGPipe, ListDriversComponent],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  @Input() packages: Package[] = [];

  driver: any = 0;
  isViewingPackage: boolean = false;

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    // If packages are not provided, get them from the database
    if (!this.packages.length) {
      this.getPackages();
    }
  }

  getPackages(): void {
    this.db.getPackages().subscribe((packages) => {
      this.packages = packages;
    });
  }

  viewPackage(_id: string): void {
    const pkg: Package | undefined = this.packages.find((pkg) => pkg._id === _id);
    this.isViewingPackage = true;

    if (pkg) {
      this.driver = pkg.driverId;
    } else {
      this.driver = 0;
    }

    console.log(this.driver);
  }
}