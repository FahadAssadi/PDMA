import { Component } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { KgToGPipe } from '../../../shared/pipes/kg-to-g/kg-to-g.pipe';

import { Package } from '../../../shared/models/Package';
import { TableHeader, TableAction } from '../../../shared/models/models';
import { TableTemplateComponent } from '../../../shared/templates/table-template/table-template.component';

@Component({
  selector: 'app-delete-package',
  standalone: true,
  imports: [KgToGPipe, TableTemplateComponent],
  templateUrl: './delete-package.component.html',
  styleUrl: './delete-package.component.css'
})
export class DeletePackageComponent {
  packages: Package[] = [];

  // Table Related Info
  tableHeaders: TableHeader[] = [];
  tableData: any[] = [];
  tableActions: TableAction[] = [];

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.getPackages();

    // Update table data
    this.tableHeaders = [
      { key: 'packageId', label: 'ID' },
      { key: 'packageName', label: 'Name' },
      { key: 'packageWeight', label: 'Weight' },
      { key: 'packageDestination', label: 'Destination' },
      { key: 'packageIsActive', label: 'Is Active' },
      { key: 'packageCreatedAt', label: 'Created At' }
    ];
    this.tableActions = [
      {
        label: 'X',
        style: 'btn btn-danger',
        function: (pkg: Package) => this.deletePackage(pkg._id)
      }
    ];
  }

  getPackages(): void {
    this.db.getPackages().subscribe((packages) => {
      this.packages = packages;
      this.tableData = this.packages;
    });
  }

  deletePackage(packageId: string): void {
    this.db.deletePackage(packageId).subscribe(() => {
      this.getPackages();
    });
  }
}
