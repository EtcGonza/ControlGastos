import { Component, OnInit, Input } from '@angular/core';
import { Deuda } from 'src/app/Models/deudaInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-deuda',
  templateUrl: './lista-deuda.component.html',
  styleUrls: ['./lista-deuda.component.scss'],
})

export class ListaDeudaComponent implements OnInit {

  @Input() titulo: string;
  @Input() Deudas: Observable <Deuda> [];
  @Input() mostrarBotones: boolean;

  constructor() {}

  ngOnInit() {}

}
