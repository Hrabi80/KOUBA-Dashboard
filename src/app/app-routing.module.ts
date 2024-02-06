import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInformationComponent } from './features/add-information/add-information.component';
import { ListInformationComponent } from './features/list-information/list-information.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {path:"ajouter-information", component:AddInformationComponent},
  {path:"list-des-information", component:ListInformationComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
