import { Component, Input } from '@angular/core';
import { DatabaseService } from '../../shared/services/database/database.service';
import { KgToGPipe } from '../../shared/pipes/kg-to-g/kg-to-g.pipe';

import type { Package } from '../../models/models.d.ts';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [KgToGPipe],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  @Input() packages: Package[] = [];

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
}