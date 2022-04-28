import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabinet-icon',
  templateUrl: './cabinet-icon.component.html',
  styleUrls: ['./cabinet-icon.component.scss']
})
export class CabinetIconComponent {

  @Input() cabinetIcon: string;
  @Input() cabinetClass: string = '';
  @Input() size: number;
  constructor() { }

}
