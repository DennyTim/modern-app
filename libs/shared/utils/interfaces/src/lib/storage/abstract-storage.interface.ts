/**
 * The Storage interface of the Web Storage API provides
 * access to a particular domain's session or local storage.
 *
 * It allows, for example, the addition, modification,
 * or deletion of stored data items.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Storage
 */

export abstract class IAbstractStorage implements Storage {

  readonly length: number;

  abstract clear(): void

  abstract getItem(key: string): string | null

  abstract key(index: number): string | null

  abstract removeItem(key: string): void

  abstract setItem(key: string, value: string): void

}
