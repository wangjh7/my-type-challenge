type MyReadonly2<T,K extends keyof T = keyof T> = { //泛型形式类型参数的默认类型 p163
  readonly [P in keyof T] : T[P] //将所有属性签名 设置为只读属性
} & { //交叉类型
  [U in Exclude<keyof T,K>]: T[U] //将T中除K以外的属性签名 设置为非只读属性
}

//若交叉类型的属性签名M在所有成员类型中都为只读属性，那么改属性签名在交叉类型中也为只读属性，否则，属性签名M为非只读属性 p178