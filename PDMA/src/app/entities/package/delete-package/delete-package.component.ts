import { Component } from '@angular/core';
import { DatabaseService } from '../../../shared/services/database/database.service';
import { ListPackagesComponent } from '../../package/list-packages/list-packages.component';

import { Package } from '../../../shared/models/Package';
import { TableAction } from '../../../shared/models/models';

@Component({
  selector: 'app-delete-package',
  standalone: true,
  imports: [ListPackagesComponent],
  templateUrl: './delete-package.component.html',
  styleUrl: './delete-package.component.css'
})
export class DeletePackageComponent {
  // Table Related Info
  tableActions: TableAction[] | null = null;

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.tableActions = [
      {
        label: 'X',
        style: 'btn btn-danger',
        function: (pkg: Package) => this.deletePackage(pkg._id)
      }
    ];
  }

  deletePackage(packageId: string): void {
    this.db.deletePackage(packageId).subscribe();
  }
}
