import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { ListPackagesComponent } from '../../../entities/package/list-packages/list-packages.component';
import { FormsModule } from '@angular/forms';

import type { TableAction } from '../../../shared/models/models';
import type { Package } from '../../../shared/models/Package';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [ListPackagesComponent, FormsModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent {
  tableActions: TableAction[] = [];

  socket: any;

  targetLanguage: string = 'fr'; // Default target language
  translatedText: string = '';

  constructor() {}

  ngOnInit(): void {
    this.tableActions = [
      {
        label: 'Translate',
        style: 'btn btn-primary',
        function: (pkg: Package) => this.translateText(pkg.packageDescription)
      }
    ];

    // Initialize socket
    this.socket = io();
  }

  translateText(text: string): void {
    let data = {
      text: text,
      target: this.targetLanguage
    }

    this.socket.emit('translate', data);

    this.socket.on('translate', (data: any) => {
      this.translatedText = data;
    });
  }
}
