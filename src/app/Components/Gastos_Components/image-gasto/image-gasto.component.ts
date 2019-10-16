import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-gasto',
  templateUrl: './image-gasto.component.html',
  styleUrls: ['./image-gasto.component.scss'],
})
export class ImageGastoComponent implements OnInit {

  @Input() urlIcono: string;

  constructor() { }

  ngOnInit() {}

}
