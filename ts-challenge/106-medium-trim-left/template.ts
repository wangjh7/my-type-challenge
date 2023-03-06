type WhiteSpace = " " | "\t" | "\n"
type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer T}` ? TrimLeft<T> : S