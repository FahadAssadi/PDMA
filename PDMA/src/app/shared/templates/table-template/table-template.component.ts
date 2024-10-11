import { Component, Input, OnChanges } from '@angular/core';

import type { TableAction } from '../../models/models';
import type { TableHeader } from '../../models/models';

@Component({
  selector: 'app-table-template',
  standalone: true,
  imports: [],
  templateUrl: './table-template.component.html',
  styleUrl: './table-template.component.css'
})
export class TableTemplateComponent implements OnChanges {
  @Input() tableHeaders: TableHeader[] = [];
  @Input() tableData: any[] = [];
  @Input() tableActions: TableAction[] = [];

  ngOnChanges(): void { }
}
