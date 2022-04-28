import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.component.html',
  styleUrls: ['./footer-button.component.scss']
})
export class FooterButtonComponent implements OnInit {

  @Input() button: any;
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
