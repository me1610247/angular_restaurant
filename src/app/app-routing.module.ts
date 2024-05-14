import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { MealPlannerComponent } from './component/meal-planner/meal-planner.component';
const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'planner',component:MealPlannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
