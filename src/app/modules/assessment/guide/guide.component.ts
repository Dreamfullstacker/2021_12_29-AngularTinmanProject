import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  guides: string[] = [
    'Time-guide',
    'HowTo-guide',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
