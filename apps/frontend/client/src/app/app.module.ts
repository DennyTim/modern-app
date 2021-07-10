import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { RootStoreModule } from '@modern-app/shared/data-access/root-store';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'modern-app' }),
    RootStoreModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  declarations: [AppComponent],
})
export class AppModule {}
