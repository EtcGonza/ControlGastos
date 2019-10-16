import { Component, OnInit, Input } from '@angular/core';
import { DeudaService } from 'src/app/Services/deuda.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {

  @Input()avatarPath: string;
  cardColor: string;

  constructor(private deudaService: DeudaService) {
    this.cardColor = this.deudaService.randomColorAvatar();
  }

  ngOnInit() {}

}
