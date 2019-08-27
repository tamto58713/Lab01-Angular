import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise01Component } from './exercise01/exercise01.component';
import { Exercise02Component } from './exercise02/exercise02.component';
import { Exercise03Component } from './exercise03/exercise03.component';
import { Exercise03CartComponent } from './exercise03-cart/exercise03-cart.component';
import { RouterModule} from '@angular/router';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
import { NavChangeExerciseComponent } from './nav-change-exercise/nav-change-exercise.component';
import { NavHeaderExercise03Component } from './nav-header-exercise03/nav-header-exercise03.component'
@NgModule({
  declarations: [
    AppComponent,
    Exercise01Component,
    Exercise02Component,
    Exercise03Component,
    Exercise03CartComponent,
    WrongPathComponent,
    NavChangeExerciseComponent,
    NavHeaderExercise03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: Exercise03Component, 
      children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: '/exercise/3'
        }
    ]
      },
      { path: 'exercise/1', component: Exercise01Component},
      { path: 'exercise/2', component: Exercise02Component},
      { path: 'exercise/3', component: Exercise03Component},
      { path: 'exercise/3/cart', component: Exercise03CartComponent},
      { path: '**', component: WrongPathComponent}
    ],  { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
