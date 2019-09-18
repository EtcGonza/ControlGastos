import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  constructor(private NavCtrl: NavController) { }

  ngOnInit() {}

  crearGasto() {
    this.NavCtrl.navigateForward('/nuevo-gasto');
  }

}
