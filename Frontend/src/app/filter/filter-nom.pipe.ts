import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNom',
})
export class FilterNomPipe implements PipeTransform {
  transform(value: any, input: any): any {
    if (input) {
      return value.filter(
        (val: any) => val.nom.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    } else {
      return value;
    }
  }
}
