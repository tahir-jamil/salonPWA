import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ApponitmentsComponent } from './shared/apponitments/apponitments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appointments', component: ApponitmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

