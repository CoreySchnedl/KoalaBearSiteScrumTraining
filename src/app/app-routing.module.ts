import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnatomyComponent } from './pages/anatomy/anatomy.component';
import { AnimalHabitatComponent } from './pages/animal-habitat/animal-habitat.component';
import { BehaviorComponent } from './pages/behavior/behavior.component';
import { CatsComponent } from './pages/cats/cats.component';
import { DietComponent } from './pages/diet/diet.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { MatingAndReproComponent } from './pages/mating-and-repro/mating-and-repro.component';
import { NameAndClassComponent } from './pages/name-and-class/name-and-class.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlatypusesComponent } from './pages/platypuses/platypuses.component';
import { QuizComponent } from './pages/quizz/quizz.component';
import { RedWolvesComponent } from './pages/red-wolves/red-wolves.component';

const routes: Routes = [
  { path: 'anatomy', component: AnatomyComponent },
  { path: 'animal-habitat', component: AnimalHabitatComponent },
  { path: 'behavior', component: BehaviorComponent },
  { path: 'diet', component: DietComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mating-and-repro', component: MatingAndReproComponent },
  { path: 'name-and-class', component: NameAndClassComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'platypuses', component: PlatypusesComponent },
  { path: 'red-wolves', component: RedWolvesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
