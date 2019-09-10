import { Pipe, PipeTransform } from '@angular/core';
import { Moment } from 'moment';

@Pipe({
  name: 'momentPipe'
})
export class MomentPipePipe implements PipeTransform {

  transform(fechaEntera: Moment): string {
    return fechaEntera.format('dddd, D MMMM');
  }

}
