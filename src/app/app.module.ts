import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MealPlannerComponent } from './component/meal-planner/meal-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MealPlannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
