import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateCatalogueComponent } from './components/generate-catalogue/generate-catalogue.component';


const routes: Routes = [
  { path: '', redirectTo: '/generateCatalogue', pathMatch: 'full' },
  {path:'generateCatalogue',component:GenerateCatalogueComponent},
  { path: '**', redirectTo: '/generateCatalogue', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
