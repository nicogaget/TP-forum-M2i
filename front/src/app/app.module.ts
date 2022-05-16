import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesListComponent } from './pages/messages-list/messages-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SujetsListComponent } from './pages/sujets-list/sujets-list.component';
import { MessageDetailsComponent } from './components/message-details/message-details.component';
import { HomeComponent } from './pages/home/home.component';
import { SujetComponent } from './components/sujet/sujet.component';
import { MessageComponent } from './components/message/message.component';
import { MessageFormComponent } from './components/message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    SujetsListComponent,
    MessageDetailsComponent,
    HomeComponent,
    SujetComponent,
    MessageComponent,
    MessageFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
