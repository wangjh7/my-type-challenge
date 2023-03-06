type WhiteSpace1 = " " | "\t" | "\n"
type Trim<S extends string> = S extends `${WhiteSpace1}${infer T}`|`${infer T}${WhiteSpace1}` ? Trim<T> : S