import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()backButton = true;
  @Input() titulo: string;
  @Input() posicion = 'izquierda';

  constructor() {}

  ngOnInit() {}

}
