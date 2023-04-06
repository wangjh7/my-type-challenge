type IsUnion<A extends unknown, B = A> = [A] extends [never] ? false : A extends A ? [B] extends [A] ? false : true : false

/**
 * 关键点在于 联合类型在条件判断的左侧会被自动拆解开
 * 
 * 举个例子 对于 A = 'a' | 'b' | 'c'
 * A extends A 实际上执行了三次，分别是'a' extends 'a', 'b' extends 'b',  'c' extends 'c'，都会得到true
 * 而联合类型在条件判断的右侧出现则不会有这个机制
 * 于是[B] extends [A]就变成了 ['a' | 'b' | 'c'] extends ['a'], ['a' | 'b' | 'c'] extends ['b'], ['a' | 'b' | 'c'] extends ['c']
 * 显然都是false
 * 
 * 那么如果 A 不是联合类型，例如 A = 'abc'
 * A extends A 即 'abc' extends 'abc'，仍然为 true
 * [B] extends [A] 即 ['abc'] extends ['abc'], 也是 true。
 * 于是 [B] extends [A] ? false : true 就会返回 false了
 */