type Last<T extends unknown[]> = T extends [...infer Rest, infer Last] ? Last : never

// type Last<T extends unknown[]> = T extends [infer Last]
// ? Last 
// : T extends [infer First,...infer Rest]
// ? Last<Rest>
// : never
