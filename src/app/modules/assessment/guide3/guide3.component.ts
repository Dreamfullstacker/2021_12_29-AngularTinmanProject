import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide3',
  templateUrl: './guide3.component.html',
  styleUrls: ['./guide3.component.scss']
})
export class Guide3Component implements OnInit {

    guides: string[] = [
        'SwipeRight-guide',
        'SwipeLeft-guide',
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
