//联合类型 作为条件类型extends左边的类型 会有分布式条件类型
//https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

type Permutation<T,Acc=T> = [T] extends [never] ? [] : Acc extends T ? [Acc,...Permutation<Exclude<T,Acc>>] : never