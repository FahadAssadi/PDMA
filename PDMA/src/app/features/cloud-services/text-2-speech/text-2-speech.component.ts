import { ChangeDetectorRef, Component, OnChanges, SimpleChange } from '@angular/core';
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
export class Text2SpeechComponent implements OnChanges {
  tableActions: TableAction[] = [];

  socket: any;
  audioSrc: string = '';

  isSpeaking: boolean = false;
  showPlayer: boolean = false;

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

  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    console.log('showing player');
    if (changes['audioSrc'].previousValue !== changes['audioSrc'].currentValue && changes['audioSrc'].currentValue !== '') {
      this.showPlayer = true;
      setTimeout(() => this.showPlayer = true, 5000);
    }
  }

  speakText(text: string): void {
    this.isSpeaking = true;

    // Emit the text to the server
    this.socket.emit('text-to-speech', text);

    this.socket.on('text-to-speech', (data: any) => {
      const audioPath = './output/' + data + '.mp3';
      this.audioSrc = audioPath;
      console.log(audioPath);

      this.showPlayer = true;

      this.cd.detectChanges();
    });
  }
}
