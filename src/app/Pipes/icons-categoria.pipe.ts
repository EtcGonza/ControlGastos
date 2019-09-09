import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconsCategoria'
})
export class IconsCategoriaPipe implements PipeTransform {

  transform(iconsArray: any [], categoria?: string): any[] {

    console.log(categoria);

    // switch (categoria) {

    //   case 'Entretenimiento':
    //       iconsArray.filter(iconos => {
    //         return iconos.find(genre => genre.category === 'Entretenimiento');
    //       });
    //       break;
    //   case 'Impuestos':
    //       iconsArray.filter(iconos => {
    //         return iconos.find(genre => genre.category === 'Impuestos');
    //       });
    //       break;
    //   case 'Transporte':
    //       iconsArray.filter(iconos => {
    //         return iconos.find(genre => genre.category === 'Transporte');
    //       });
    //       break;
    //   case 'Comida':
    //       iconsArray.filter(iconos => {
    //         return iconos.find(genre => genre.category === 'Comida');
    //       });
    //       break;
    //   case 'Otros':
    //       iconsArray.filter(iconos => {
    //         return iconos.find(genre => genre.category === 'Otros');
    //       });
    //       break;
    //   case 'Salud':
    //       iconsArray.filter(iconos => {
    //         return iconos.find(genre => genre.category === 'Salud');
    //       });
    //       break;
    //   default:
    //     return iconsArray;

    // }

    return iconsArray;
  }

}
