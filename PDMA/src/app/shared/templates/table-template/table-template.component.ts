import { Component, Input } from '@angular/core';
import { TableAction } from '../../models/models';

@Component({
  selector: 'app-table-template',
  standalone: true,
  imports: [],
  templateUrl: './table-template.component.html',
  styleUrl: './table-template.component.css'
})
export class TableTemplateComponent {
  @Input() tableHeaders: string[] = [];
  @Input() tableData: any[] = [];
  @Input() tableActions: TableAction[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log("Table headers: ", this.tableHeaders);
    console.log("Table data: ", this.tableData);
  }

}
