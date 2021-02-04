import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { SettingsComponent } from './components/settings/settings.component';  
import { ItemComponent } from './components/item/item.component'; 
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import { Nifty50Component } from './nifty50/nifty50.component';

const routes: Routes = [
  //{path: '', component: DashboardComponent, canActivate:[AuthGuard] },
  {path: '', component: Nifty50Component},  
  {path: 'Item1', component: Nifty50Component},
  {path: 'Item2', component: Nifty50Component},
  {path: 'Item3', component: Nifty50Component},
  {path: 'Item4', component: Nifty50Component},
  {path: 'Item5', component: Nifty50Component},
  {path: 'Link1', component: Nifty50Component},
  {path: 'Link2', component: Nifty50Component},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  {path: 'client/add', component: AddClientComponent, canActivate:[AuthGuard]},
  {path: 'client/edit/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent, canActivate:[AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, RegisterGuard]
})
export class AppRoutingModule { }
