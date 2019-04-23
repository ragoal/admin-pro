import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { AccountSetingsComponent } from './account-setings/account-setings.component';


@NgModule({

    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficaDonaComponent,
        AccountSetingsComponent
    ],
    imports:[
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        ChartsModule
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ]
})
export class PagesModule{}
