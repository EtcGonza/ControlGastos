import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-icons-slides',
  templateUrl: './icons-slides.component.html',
  styleUrls: ['./icons-slides.component.scss'],
})
export class IconsSlidesComponent implements OnInit {

  @Input()iconos: any[];
  @Input()categoria: string;

  slideOpts = {
    slidesPerView: 2.5,
    freeMode: false
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss(iconoPath: string) {
    this.modalCtrl.dismiss(
      {
        iconoPath
      }
    );
  }

}
