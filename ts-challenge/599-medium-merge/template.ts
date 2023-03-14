type Merge<U extends Object,T extends Object> = {
  [k in (keyof U | keyof T)] : k extends keyof T ? T[k] : k extends keyof U ? U[k] : never
}