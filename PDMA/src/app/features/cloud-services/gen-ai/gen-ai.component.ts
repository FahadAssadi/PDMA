import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { ListPackagesComponent } from '../../../entities/package/list-packages/list-packages.component';
import { FormsModule } from '@angular/forms';

import type { TableAction } from '../../../shared/models/models';
import { Package } from '../../../shared/models/Package';

@Component({
  selector: 'app-gen-ai',
  standalone: true,
  imports: [ListPackagesComponent, FormsModule],
  templateUrl: './gen-ai.component.html',
  styleUrl: './gen-ai.component.css'
})
export class GenAiComponent {
  tableActions: TableAction[] = [];

  socket: any;
  genAi_output: string = '';

  constructor() {}

  ngOnInit(): void {
    this.tableActions = [
      {
        label: 'Generate AI',
        style: 'btn btn-primary',
        function: (pkg: Package) => this.generateAi(pkg.packageDestination)
      }
    ];

    this.socket = io();
  }

  generateAi(destination: string): void {
    let prompt = `Give me the distance between ${destination} and Melbourne, Australia. (I will be displaying your output on my website include both km and miles in one sentence.)`;

    let data = {
      text: prompt
    }

    this.socket.emit('generative-ai', data);

    this.socket.on('generative-ai', (data: any) => {
      this.genAi_output = data;
    });
  }
}
