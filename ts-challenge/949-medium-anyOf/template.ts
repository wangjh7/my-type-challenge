type Falsy = 0 | "" | false | [] | undefined | null | Record<string,never>
// type AnyOf<T extends unknown[]> = T extends [infer Head,...infer Tail] ?  Head extends Falsy ? AnyOf<Tail> : true : false
type AnyOf<T extends unknown[]> = T[number] extends Falsy ? false : true