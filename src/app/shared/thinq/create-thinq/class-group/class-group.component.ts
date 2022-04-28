import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-class-group',
  templateUrl: './class-group.component.html',
  styleUrls: ['./class-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassGroupComponent implements OnInit {

  @Input() classGroup: string;
  @Input() cabinets: any[];
  @Output() createThinq: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onCreateThinq(classId: number): void {
    this.createThinq.emit(classId);
  }
}
