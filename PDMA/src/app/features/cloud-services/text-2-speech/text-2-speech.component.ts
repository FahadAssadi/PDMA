import { ChangeDetectorRef, Component } from '@angular/core';
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
  tableActions: TableAction[] = [];

  socket: any;
  showPlayer: boolean = false;

  audioSrc: string = '';
  audioText: string = '';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.tableActions = [
      {
        label: 'Speak',
        style: 'btn btn-primary',
        function: (driver: Driver) => this.speakText(driver.driverLicense)
      }
    ];

    // Initialize socket
    this.socket = io();
  }

  speakText(text: string): void {
    let data = {
      text: text
    }

    this.socket.emit('text-to-speech', data);

    this.socket.on('text-to-speech', (data: any) => {
      this.audioText = text;
      this.audioSrc = './output/' + data + '.mp3';
      this.showPlayer = true;

      this.cd.detectChanges();
    });

  }
}
