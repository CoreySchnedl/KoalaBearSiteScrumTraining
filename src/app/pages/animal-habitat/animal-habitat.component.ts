import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-habitat',
  templateUrl: './animal-habitat.component.html',
  styleUrls: ['./animal-habitat.component.scss']
})
export class AnimalHabitatComponent implements OnInit {

  constructor() { }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/darkwds1.wav";
    audio.load();
    audio.play();
  }

  ngOnInit(): void {
    this.playAudio();
  }
}
