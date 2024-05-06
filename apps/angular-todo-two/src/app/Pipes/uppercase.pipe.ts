import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'to_uppercase',
})
export class UppercasePipe implements PipeTransform {
  transform(str: string, id: string | undefined) {
    return `${id} - ${str.toUpperCase()}`;
  }
}
