import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'modern-app'}),
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [AppComponent],
})
export class AppModule {
}
