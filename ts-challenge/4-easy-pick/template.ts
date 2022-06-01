type MyPick<T, K extends keyof T> = { //extends:泛型约束 p162
  [P in K] : T[P] //映射对象类型
}