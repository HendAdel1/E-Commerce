import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value:number): string {
    return value !==0 ? "In stock "+ value : "out of stock";
    // if(value !== 0)
    // {
    //   return  "In stock " + value;
    // }
    // else
    // {
    //   return "out of stock";
    // }
  }
}
