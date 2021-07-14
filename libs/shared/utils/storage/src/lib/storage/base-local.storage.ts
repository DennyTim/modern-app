import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";
import {ILocalStorage, IMemoryStorage} from "@modern-app/shared/utils/interfaces";
import {storageAvailable} from "../utils/storage.util";

@Injectable()
export class BaseLocalStorage implements ILocalStorage {

  private readonly storage: Storage;

  constructor(
    private memoryStorage: IMemoryStorage,
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    if (isPlatformBrowser(platformId) && storageAvailable('localStorage')) {
      this.storage = window.localStorage;
    } else {
      this.storage = this.memoryStorage;
    }
  }

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
