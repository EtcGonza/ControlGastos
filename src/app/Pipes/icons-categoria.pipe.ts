import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconsCategoria'
})
export class IconsCategoriaPipe implements PipeTransform {

  transform(iconsArray: any [], categoria: string): any[] {
    return iconsArray.filter( iconos =>  iconos.categoria === categoria );
  }

}
