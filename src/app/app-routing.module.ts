import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: ContactDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
