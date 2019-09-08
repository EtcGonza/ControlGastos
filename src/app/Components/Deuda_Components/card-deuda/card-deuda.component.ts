import { Component, OnInit, Input } from '@angular/core';
import { DeudaService } from 'src/app/Services/deuda.service';
import { Deuda } from 'src/app/Models/deudaInterface';

@Component({
  selector: 'app-card-deuda',
  templateUrl: './card-deuda.component.html',
  styleUrls: ['./card-deuda.component.scss'],
})
export class CardDeudaComponent implements OnInit {

  @Input()deuda: Deuda;
  @Input()botones: boolean;

  mostrarbotones = true;

  constructor(private deudaService: DeudaService) {}

  ngOnInit() {
    this.mostrarbotones = this.botones;
  }

  borrarDeuda() {
    this.deudaService.eliminarDeuda(this.deuda.id, this.deuda.Tipo);
  }

  completarDeuda() {
    this.deudaService.completarDeuda(this.deuda);
  }

}
