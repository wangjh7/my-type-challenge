type ReplaceKeys<T,U,V> = {
  [K in keyof T] : K extends U ? K extends keyof V ? V[K] : never : T[K]
}