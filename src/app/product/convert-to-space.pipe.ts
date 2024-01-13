import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(value: string,replacewith:string=","): string {
    return value.replace("-",replacewith).toLowerCase();
    // return value.substring(2);
  }

}
