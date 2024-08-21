import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDate',
  standalone: true
})
export class ConvertToDatePipe implements PipeTransform {

  transform(seconds: number): string {
    if (isNaN(seconds) || seconds < 0) {
      return '';
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    const hoursDisplay = hours > 0 ? `${hours}h` : '';
    const minutesDisplay = minutes > 0 ? `${minutes}m` : '';

    return `${hoursDisplay} ${minutesDisplay}`.trim();
  }

}