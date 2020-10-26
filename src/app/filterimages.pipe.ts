import { Pipe, PipeTransform } from '@angular/core';    
    
@Pipe({    
  name: 'filterimages'    
})    
export class FilterimagesPipe implements PipeTransform {    
  transform(items: any[], laptop: string): any {    
    if(laptop === 'all'){ return items } else    
    return items.filter(item =>{    
      return item.brand === laptop;    
    });    
  }    
    
} 