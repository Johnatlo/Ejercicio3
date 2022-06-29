import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumerosComponent } from './components/numeros/numeros.component';

const routes: Routes = [

  { path: '', redirectTo: 'numeros', pathMatch: 'full'},
  { path: 'numeros', component: NumerosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
