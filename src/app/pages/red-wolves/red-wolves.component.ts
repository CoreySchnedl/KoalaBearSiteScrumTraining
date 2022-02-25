import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-wolves',
  templateUrl: './red-wolves.component.html',
  styleUrls: ['./red-wolves.component.scss']
})
export class RedWolvesComponent implements OnInit {

  url = 'https://teamredwolves.weebly.com/';

  constructor() { }

  ngOnInit(): void {
  }

}
