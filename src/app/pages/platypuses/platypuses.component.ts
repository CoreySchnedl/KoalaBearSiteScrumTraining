import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platypuses',
  templateUrl: './platypuses.component.html',
  styleUrls: ['./platypuses.component.scss']
})
export class PlatypusesComponent implements OnInit {
  url = 'https://platypodes253353169.wordpress.com/'

  constructor() { }

  ngOnInit(): void {
  }

}
