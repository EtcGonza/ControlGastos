import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-presentacion-gastos',
  templateUrl: './presentacion-gastos.component.html',
  styleUrls: ['./presentacion-gastos.component.scss'],
})
export class PresentacionGastosComponent implements OnInit {

  constructor(private NavCtrl: NavController) { }

  ngOnInit() {}

  crearGasto() {
    this.NavCtrl.navigateForward('/nuevo-gasto');
  }

}
