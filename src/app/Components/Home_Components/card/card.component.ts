import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input()valor: number;
  @Input()pathIcon: string;
  @Input()titulo: string;

  constructor() { }

  ngOnInit() {}

}
