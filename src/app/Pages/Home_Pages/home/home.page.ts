import { Component, OnInit } from '@angular/core';
import { MiBilleteraService } from '../../../Services/mi-billetera.service';
import { Billetera } from '../../../Models/billeteraInterface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private miBilletera: Billetera;

  constructor(private miBilleteraService: MiBilleteraService) {}

  ngOnInit() {
    this.miBilleteraService.billeteraListener.subscribe( (miBilletera: Billetera) => {
        this.miBilletera = miBilletera;
      });
  }
}
