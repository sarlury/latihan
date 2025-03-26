import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
  standalone: false
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return '';
    return value.toUpperCase();
  }

}
