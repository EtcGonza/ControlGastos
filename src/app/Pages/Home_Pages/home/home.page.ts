import { Component } from '@angular/core';
import { MiBilleteraService } from '../../../Services/mi-billetera.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private MiBilleteraService: MiBilleteraService) {}

}
