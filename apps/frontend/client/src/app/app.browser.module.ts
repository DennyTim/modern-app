import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {AppModule} from "./app.module";
import {environment} from "../environments/environment";
import {AppComponent} from "./core/components/app/app.component";
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    BrowserAnimationsModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({logOnly: environment.production})
      : [],
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
}
