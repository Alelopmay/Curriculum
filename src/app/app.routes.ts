import { RouterModule, Routes } from '@angular/router';
// Asegúrate de importar el componente correcto
import { NgModule } from '@angular/core';
import { HomeComponent } from './page/home/home.component';
import { PracticeComponent } from './page/practice/practice.component';
import { ProyectComponent } from './page/proyect/proyect.component';
import { ToolsComponent } from './page/tools/tools.component';
import { StudiesComponent } from './page/studies/studies.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'practice', component: PracticeComponent },
    { path: 'proyect', component: ProyectComponent },
    { path: 'tools', component: ToolsComponent },
    { path: 'studies', component: StudiesComponent }




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }