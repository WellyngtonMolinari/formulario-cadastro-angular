import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'relatorio', component: RelatorioComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
