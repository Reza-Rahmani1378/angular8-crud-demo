import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatePersoncomponent} from './person/create-person/create-personcomponent';
import {PersonListComponent} from './person/persons-list/person-list.component';
import {UpdatePersonComponent} from './person/update-person/update-person.component';

const routes: Routes = [
  {path: '', redirectTo: 'person', pathMatch: 'full'},
  {path: 'add', component: CreatePersoncomponent},
  {path: 'persons', component: PersonListComponent},
  {path: 'update/:id', component: UpdatePersonComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
