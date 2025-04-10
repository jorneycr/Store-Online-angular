import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:'', component: ListadoProductosComponent}, //localhost:4200/
    {path:'listado', component: ListadoProductosComponent},
    {path:'agregar', component: FormularioComponent},
    {path:'editar/:llave', component: FormularioComponent},
    {path:'**', component: ErrorComponent} //localhost:4200/404,
];
