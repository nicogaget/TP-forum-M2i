import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { SujetComponent } from './components/sujet/sujet.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesListComponent } from './pages/messages-list/messages-list.component';
import { SujetsListComponent } from './pages/sujets-list/sujets-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sujets', component: SujetsListComponent },
  { path: 'sujets/:id/messages', component: MessagesListComponent },

  { path: 'sujets/:id/messages/new', component: MessageFormComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
