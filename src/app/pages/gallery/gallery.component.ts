import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = [
    { path: '../../../assets/Child.jpeg' },
    { path: '../../../assets/Eating.jpeg' },
    { path: '../../../assets/Mark.png' },
    { path: '../../../assets/Sitting.jpeg' },
    { path: '../../../assets/Sleeping.jpeg' },
    { path: '../../../assets/haircut.jpeg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
