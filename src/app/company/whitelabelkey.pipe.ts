
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whitelabelkey'
})
export class WhitelabelkeyPipe implements PipeTransform {

  transform(v, args) {

console.log("Test");
console.log(v); 
   //console.log(`${v.toString().split('#')[0]}`);
    if (v!=null)
    {
console.log("Testtt");
      console.log(`${v.toString().split('#')[1]}`);
     return ` ${v.toString().split('#')[1]}`;
   }

   }
}

