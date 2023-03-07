type MyCapitalize<S extends string> = S extends `${infer C}${infer Rest}` ? `${Uppercase<C>}${Rest}` : ""
