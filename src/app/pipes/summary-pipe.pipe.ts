import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryPipe'
})
export class SummaryPipePipe implements PipeTransform {

  transform(value: string,limit?:number): string {
    if(!value)
    return null;
    let actualLimit=(limit)?limit:20;
    return value.substring(0,actualLimit)+"....";
  }

}
