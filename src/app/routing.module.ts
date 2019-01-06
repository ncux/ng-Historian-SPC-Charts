
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { IXMRComponent } from './charts/ixmr/ixmr.component';
import { XbarRComponent } from './charts/xbar-r/xbar-r.component';
import { XbarSComponent } from './charts/xbar-s/xbar-s.component';


const routes: Routes = [
    { path: '', redirectTo: '/project', pathMatch: 'full' },
    { path: 'ixmr', component: IXMRComponent },
    { path: 'IXMR', component: IXMRComponent },
    { path: 'xbar-r', component: XbarRComponent },
    { path: 'Xbar-R', component: XbarRComponent },
    { path: 'xbar-s', component: XbarSComponent },
    { path: 'Xbar-S', component: XbarSComponent },
    { path: 'project', component: FormInputsComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class RoutingModule {

}
