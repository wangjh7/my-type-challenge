// type First<T extends any[]> = T extends [] ? never : T[0]; //1. extends 类型条件判断
type First<T extends any[]> = T["length"] extends 0 ? never : T[0] //2. 获取tuple的length属性


//知识点
//1. extends 类型条件判断
//2. 获取tuple的length属性
//3. extends union 判断的规则
//4. infer的使用
