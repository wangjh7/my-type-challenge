//https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#string-unions-in-types
type WhiteSpace = " " | "\t" | "\n"
type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer T}` ? TrimLeft<T> : S