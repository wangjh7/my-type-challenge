type AppendToObject<T extends Object, U extends string, V> = {
  [k in (keyof T | U)] : k extends keyof T ? T[k] : V
}