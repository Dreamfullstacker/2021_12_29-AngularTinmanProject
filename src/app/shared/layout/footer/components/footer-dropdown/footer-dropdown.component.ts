import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer-dropdown',
  templateUrl: './footer-dropdown.component.html',
  styleUrls: ['./footer-dropdown.component.scss']
})
export class FooterDropdownComponent implements OnInit {

  @Input() dropDownButton: any;
  @Output() clickButton: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(action: string, data: any): void {
    this.clickButton.emit({
      clickAction: action,
      clickData: data
    });
  }
}
