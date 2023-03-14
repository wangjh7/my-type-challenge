//https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
//https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

type AppendToObject<T extends Object, U extends string, V> = {
  [k in (keyof T | U)] : k extends keyof T ? T[k] : V
}