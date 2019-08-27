import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RatingModule } from 'ng-starrating'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import {FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise01Component } from './exercise01/exercise01.component';
import { Exercise02Component } from './exercise02/exercise02.component';
import { Exercise03Component } from './exercise03/exercise03.component';
import { Exercise03CartComponent } from './exercise03-cart/exercise03-cart.component';
import { RouterModule} from '@angular/router';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
import { NavChangeExerciseComponent } from './nav-change-exercise/nav-change-exercise.component';
import { NavHeaderExercise03Component } from './nav-header-exercise03/nav-header-exercise03.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Exercise05Component } from './exercise05/exercise05.component';
import { Exercise04Component } from './exercise04/exercise04.component';
import { Exercise04DetailProductComponent } from './exercise04-detail-product/exercise04-detail-product.component';
@NgModule({
  declarations: [
    AppComponent,
    Exercise01Component,
    Exercise02Component,
    Exercise03Component,
    Exercise03CartComponent,
    WrongPathComponent,
    NavChangeExerciseComponent,
    NavHeaderExercise03Component,
    HomePageComponent,
    Exercise05Component,
    Exercise04Component,
    Exercise04DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'exercise/1', component: Exercise01Component},
      { path: 'exercise/2', component: Exercise02Component},
      { path: 'exercise/3', component: Exercise03Component},
      { path: 'exercise/3/cart', component: Exercise03CartComponent},
      { path: 'exercise/4', component: Exercise04Component},
      { path: 'exercise/4/products/:productId', component: Exercise04DetailProductComponent},
      { path: 'exercise/5', component: Exercise05Component},
      { path: '**', component: WrongPathComponent}
    ],  { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
