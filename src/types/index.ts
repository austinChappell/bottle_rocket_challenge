export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

export enum KeyCodes {
  Enter = 13,
  Esc = 27,
  Space = 32,
  Tab = 9,
}
