import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNote',
})
export class FilterNotePipe implements PipeTransform {
  transform(value: any, input: any): any {
    if (input) {
      return value.filter((val: any) => val.moyenne >= 4);
    } else {
      return value;
    }
  }
}
