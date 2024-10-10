import { Component } from '@angular/core';
import { ListDriversComponent } from '../../../entities/driver/list-drivers/list-drivers.component';
import { TableAction } from '../../../shared/models/models';
import { io } from 'socket.io-client';
import { Driver } from '../../../shared/models/Driver';

@Component({
  selector: 'app-text-2-speech',
  standalone: true,
  imports: [ListDriversComponent],
  templateUrl: './text-2-speech.component.html',
  styleUrl: './text-2-speech.component.css'
})
export class Text2SpeechComponent {
  tableActions: TableAction[] = [
    {
      label: 'Speak',
      style: 'btn btn-primary',
      function: (driver: Driver) => this.speakText(driver.driverLicense)
    }
  ];

  socket: any;
  audioSrc: string = '';

  constructor() {}

  ngOnInit(): void {
    // Initialize socket
    this.socket = io();
  }

  speakText(text: string): void {
    // Emit the text to the server
    this.socket.emit('text-to-speech', text);

    this.socket.on('text-to-speech', (data: any) => {
      this.audioSrc = data;

      console.log('Audio source: ', this.audioSrc);
    });
  }
}
