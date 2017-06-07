import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whitelabelkey'
})
export class WhitelabelkeyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
