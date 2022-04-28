import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cabinet-header',
  templateUrl: './cabinet-header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CabinetHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() headerIcon: string;
  @Input() headerClass: string;
  @Input() size: number;
  constructor() { }

  ngOnInit(): void {
  }

}
