type If<C extends boolean,T,F> =C extends true ? T : F

//Nullable p51
//strictNullChecks开启的情况下 undefined值只能赋值给undefined类型 null值只能赋值给null类型
//关闭的情况下 除了尾端类型之外 所有的类型都能接受undefined值和null值
//https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability