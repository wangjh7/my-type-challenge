// type First<T extends any[]> = T extends [] ? never : T[0]; 
//1. extends 类型条件判断 p196


// type First<T extends any[]> = T["length"] extends 0 ? never : T[0] 
//2. 获取tuple的length属性


// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never; 
//3. extends union 判断的规则
// type age = []
// type a1 = age[number]
//如果T数组为空 T[number]返回never

type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never 
//[infer First, ...infer Rest]类似于js里的解构 解构出了T中的第一个元素的类型First和剩余元素类型Rest
//infer关键词 p199
//4. infer的使用


//知识点
//1. extends 类型条件判断
//2. 获取tuple的length属性
//3. extends union 判断的规则
//4. infer的使用
