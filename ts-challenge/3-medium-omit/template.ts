type MyOmit<T,U extends keyof T> = {
  [P in MyExclude<keyof T , U>]:T[P]
}