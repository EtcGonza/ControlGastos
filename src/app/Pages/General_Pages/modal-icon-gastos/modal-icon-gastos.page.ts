import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IconsCategoriaPipe } from '../../../Pipes/icons-categoria.pipe';

@Component({
  selector: 'app-modal-icon-gastos',
  templateUrl: './modal-icon-gastos.page.html',
  styleUrls: ['./modal-icon-gastos.page.scss'],
})

export class ModalIconGastosPage implements OnInit {

  iconPath: any[] = [];

  constructor(private http: HttpClient,
              public pipeIconos: IconsCategoriaPipe) { }

  ngOnInit() {
    this.getIcons();
  }

  getIcons() {
    // console.log(this.http.get('/assets/icons/icons.json'));
    this.http.get('/assets/icons/icons.json').subscribe( (data: any) => {
      this.iconPath = data;
      console.log(this.iconPath);
    });
  }

}
