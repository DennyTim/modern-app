import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ICookieService,
  ILocalStorage,
  IMemoryStorage,
  ISessionStorage,
  IStorageOptions,
} from "@modern-app/shared/utils/interfaces";
import {BaseCookieStorage} from "./storage/base-cookie.storage";
import {BaseSessionStorage} from "./storage/base-session.storage";
import {BaseMemoryStorage} from "./storage/base-memory.storage";
import {BaseLocalStorage} from "./storage/base-local.storage";
import {BaseCookieService} from "./services/base-cookie.service";

@NgModule({
  imports: [CommonModule],
})
export class StorageModule {
  static forRoot(option: Partial<IStorageOptions>): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        {
          provide: ICookieService,
          useClass: option.cookieService || BaseCookieService,
        },
        {
          provide: ICookieService,
          useClass: option.cookieStorage || BaseCookieStorage
        },
        {
          provide: ISessionStorage,
          useClass: option.sessionStorage || BaseSessionStorage,
        },
        {
          provide: ILocalStorage,
          useClass: option.localStorage || BaseLocalStorage,
        },
        {
          provide: IMemoryStorage,
          useClass: option.memoryStorage || BaseMemoryStorage,
        },
      ],
    };
  }
}
