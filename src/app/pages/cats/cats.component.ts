import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  url = 'https://steigerandrew.wixsite.com/greencats';

  constructor() { }

  ngOnInit(): void {
  }

}
