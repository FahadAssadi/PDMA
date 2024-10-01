import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToUpper',
  standalone: true
})
export class StringToUpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }

}
