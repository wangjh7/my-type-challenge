type LookUp<U, T extends string> = U extends {type:T} ? U : never

//条件类型 判断 extends左边的类型 是否可以分配给右边的类型
//详见 https://www.typescriptlang.org/docs/handbook/2/conditional-types.html