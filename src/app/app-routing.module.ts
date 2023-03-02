import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';

const routes: Routes = [
  { path: 'artists', component: ArtistsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
