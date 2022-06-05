import type { Equal, } from '@type-challenges/utils'

export type Includes<A extends unknown[],T> = A extends [
  infer First,
  ... infer Rest
] //如果A可以结构成[First,...Rest] 的结构
? Equal<First,T> extends true ?
  true:
  Includes<Rest,T>
: false