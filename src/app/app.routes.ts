import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { EmailComponent } from './email/email.component';
import {  NgModule } from '@angular/core';


export const routes: Routes = [
    {
    path:'features',
    component:FeaturesComponent
    },
    {
        path:'email',
        component:EmailComponent
    }
];

