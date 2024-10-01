import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kgToG',
  standalone: true
})
export class KgToGPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `${value * 1000}g`;
  }

}
