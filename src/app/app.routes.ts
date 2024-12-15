import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BandsComponent } from './bands/bands.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'bands',
        component: BandsComponent
    }
];