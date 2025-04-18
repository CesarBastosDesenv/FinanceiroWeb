import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/Dashboard/dashboard/dashboard.component';
import { MinhaCarteiraComponent } from './pages/MinhaCarteira/minha-carteira/minha-carteira.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'MinhaCarteira', component: MinhaCarteiraComponent},
  { path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
