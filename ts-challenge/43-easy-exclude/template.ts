type MyExclude<T, U> = T extends U ? never : T;

/**
 * 分布式条件类型 p197
 * 若实际类型参数T是联合类型，那么分布式条件类型会被展开
 * 如：T为 A|B
 * T extends U ? X : Y 等价于 (A extends U ? X : Y) | (B extends U ? X : Y)
 */

/**
 * 利用联合类型的特性来过滤类型：
 * 在联合类型 U = U0| U1 中，若U1是U0的子类型，那么联合类型可以简化成 U = U0
 * 又因为 never类型是尾端类型，它是任何其他类型的子类型，当never类型和其他类型组成联合类型时，可以直接将never类型消掉： T|never 等价于 T
 * 所以可以得到第一行MyExclude的解法
 * 
 * MyExclude<string | undefined , null | undefined> 等价于
 * (string extends null | undefined ? never : string) | (undefined extends null | undefined ? never: undefined) 等价于   (string不能赋值给null或undefined)
 * string | never 等价于
 * string
 * 
 */
