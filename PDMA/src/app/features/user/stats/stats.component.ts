import { Component } from '@angular/core';
import { DatabaseService } from '../../shared/services/database/database.service';

import { Statistics } from '../../shared/models/Statistics';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  statistics: Statistics | undefined;

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.getStats();
  }

  getStats(): void {
    // Get statistics from database
    this.db.getStatistics().subscribe((stats) => {
      this.statistics = stats;
    });
  }
}
