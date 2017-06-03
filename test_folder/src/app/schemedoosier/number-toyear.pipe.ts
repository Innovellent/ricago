import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToyear'
})
export class NumberToyearPipe implements PipeTransform {


  values: any = [['', 365], ['', 30], ['', 1]];
  //i: any = [];
   transform(v, args)  {
      // console.log("NumberTodatePipe");
      //   console.log(v);


  var str = '';
   // Map lengths of `diff` to different time periods

   // Iterate over the values...
   for (var i=0;i<this.values.length;i++) {
     var amount = Math.floor(v /this.values[i][1]);
  //console.log(amount);
     // ... and find the largest time value that fits into the diff
     if (amount >= 1) {
       // If we match, add to the string ('s' is for pluralization)
       str += amount + this.values[i][0] + (amount > 1 ? '' : '') + ' ';

       // and subtract from the diff
       //
      // //  console.log(amount);
      //  console.log(this.values[i][1]);
       v -= amount * this.values[i][1];
     }
   }
    //var res = str.substring(0, 1);
  //   console.log("str");
  //  console.log(str);
   return str.substring(0, 1);
  }

}
