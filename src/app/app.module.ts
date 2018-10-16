import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ConfirmComponent } from './confirm/confirm.component';
import { MessageComponent } from './message/message.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: MessageComponent },
  { path: 'confirm', component: ConfirmComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
