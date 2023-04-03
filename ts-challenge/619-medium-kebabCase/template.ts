type KebabCase<T extends string> = 
  T extends `${infer Head}${infer Tail}` ? 
    Tail extends Uncapitalize<Tail> ? 
      `${Uncapitalize<Head>}${KebabCase<Tail>}`:
      `${Uncapitalize<Head>}-${KebabCase<Tail>}`
  : T