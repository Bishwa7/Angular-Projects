import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimTextPipe',
})

export class TrimTextPipePipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {

    if(!value) {
      return "";
    }

    if(args.length) {
      return value.length > args[0] ? value.substring(0,args[0]) + "..." : value ;
    }
    return value.length > 10 ? value.substring(0,10) + "..." : value ; 
  }
}
