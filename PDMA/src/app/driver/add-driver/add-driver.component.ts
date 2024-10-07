import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database/database.service';
import { Router } from '@angular/router';

import { Driver } from '../../models/Driver';

@Component({
  selector: 'app-add-driver',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './add-driver.component.html',
  styleUrl: './add-driver.component.css'
})
export class AddDriverComponent {
  constructor(private db: DatabaseService, private router: Router) {}

  driver: Driver = new Driver();

  addDriver(): void {
    // Add driver to database
    this.db.createDriver(this.driver).subscribe({
      error: (err) => {
        console.log("Error adding driver", err);
        this.router.navigate(['/invalid-data']);
      }
    });
    
    this.router.navigate(['/list-drivers']);
  }
}
