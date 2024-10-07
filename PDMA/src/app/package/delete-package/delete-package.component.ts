import { Component } from '@angular/core';
import { DatabaseService } from '../../shared/services/database/database.service';
import { KgToGPipe } from '../../shared/pipes/kg-to-g/kg-to-g.pipe';

import type { Package } from '../../models/models.d.ts';

@Component({
  selector: 'app-delete-package',
  standalone: true,
  imports: [KgToGPipe],
  templateUrl: './delete-package.component.html',
  styleUrl: './delete-package.component.css'
})
export class DeletePackageComponent {
  packages: Package[] = [];

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(): void {
    this.db.getPackages().subscribe((packages) => {
      this.packages = packages;
    });
  }

  deletePackage(packageId: string): void {
    // Delete package from database
    this.db.deletePackage(packageId).subscribe((data) => {
      this.packages = this.packages.filter((pkg) => pkg._id !== packageId);
    });
  }
}
