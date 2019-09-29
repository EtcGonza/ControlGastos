import { Component, OnInit, Input } from '@angular/core';
import { DeudaService } from 'src/app/Services/deuda.service';
import { Deuda } from 'src/app/Models/deudaInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-deuda',
  templateUrl: './card-deuda.component.html',
  styleUrls: ['./card-deuda.component.scss'],
})
export class CardDeudaComponent implements OnInit {

  @Input()deuda: Observable <Deuda>;
  // mostrarbotones = true;

  constructor(private deudaService: DeudaService) {}

  ngOnInit() {
    // this.mostrarbotones = this.botones;
  }

  borrarDeuda() {
    this.deudaService.eliminarDeuda(this.deuda);
  }

  completarDeuda() {
    // this.deudaService.completarDeuda(this.deuda);
  }

}
