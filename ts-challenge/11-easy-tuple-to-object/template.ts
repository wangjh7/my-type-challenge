type TupleToObject<T extends readonly (number|string|symbol)[]> = {
  [P in T[number]] :  P;
}

//T[number] :遍历一个元组字面量类型