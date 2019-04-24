
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NgModule } from '@angular/core';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AccountSetingsComponent } from './account-setings/account-setings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes:Routes =[
    {
        path: '',
        component: PagesComponent,
        children:[
            {path:'dashboard', component:DashboardComponent, data:{titulo:'Dasboard'}},
            {path:'account-settings', component:AccountSetingsComponent, data:{titulo:'Account Settings'}},
            {path:'progress', component:ProgressComponent, data:{titulo:'Progress'}},
            {path:'graficas1', component:Graficas1Component, data:{titulo:'Gráficas'}},
            {path:'promesas', component:PromesasComponent, data:{titulo:'RxJs'}},
            {path:'rxjs', component:RxjsComponent, data:{titulo:'Dasboard'}},
            {path:'', redirectTo:'/dashboard',pathMatch:'full'},
            {path:'**', component: NopagefoundComponent},
        ]
     }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }

