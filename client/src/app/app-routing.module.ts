import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { PersonAddComponent } from './person-add/person-add.component';

const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'add', component: PersonAddComponent },
  { path: 'edit/:id', component: PersonEditComponent },
  { path: 'delete/:id', component: PersonDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
