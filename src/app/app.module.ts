import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DietComponent } from './pages/diet/diet.component';
import { MatingAndReproComponent } from './pages/mating-and-repro/mating-and-repro.component';
import { AnimalHabitatComponent } from './pages/animal-habitat/animal-habitat.component';
import { NameAndClassComponent } from './pages/name-and-class/name-and-class.component';
import { AnatomyComponent } from './pages/anatomy/anatomy.component';
import { BehaviorComponent } from './pages/behavior/behavior.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { QuizComponent } from './pages/quizz/quizz.component';
import { RedWolvesComponent } from './pages/red-wolves/red-wolves.component';
import { PlatypusesComponent } from './pages/platypuses/platypuses.component';
import { CatsComponent } from './pages/cats/cats.component';
import { SafePipe } from './pipes/SafePipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    DietComponent,
    MatingAndReproComponent,
    AnimalHabitatComponent,
    NameAndClassComponent,
    AnatomyComponent,
    BehaviorComponent,
    NotFoundComponent,
    QuizComponent,
    RedWolvesComponent,
    PlatypusesComponent,
    CatsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
