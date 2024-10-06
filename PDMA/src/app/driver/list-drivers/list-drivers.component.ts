import { Component } from '@angular/core';
import { DatabaseService } from '../../shared/services/database/database.service';
import { StringToUpperPipe } from '../../shared/pipes/string-to-upper/string-to-upper.pipe';

import type { Driver } from '../../models/models.d.ts';

@Component({
  selector: 'app-list-drivers',
  standalone: true,
  imports: [StringToUpperPipe],
  templateUrl: './list-drivers.component.html',
  styleUrl: './list-drivers.component.css'
})
export class ListDriversComponent {
  drivers: Driver[] = [];

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.db.getDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }

}
