import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-icon-gastos',
  templateUrl: './modal-icon-gastos.page.html',
  styleUrls: ['./modal-icon-gastos.page.scss'],
})

export class ModalIconGastosPage implements OnInit {

  iconPath: any[] = [];
  icono: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getIcons();
  }

  getIcons() {
    this.http.get('/assets/icons/icons.json').subscribe( (data: any) => {
      this.iconPath = data;
    });
  }

}
