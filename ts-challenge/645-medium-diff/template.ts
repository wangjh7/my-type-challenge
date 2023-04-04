type Diff<L, R> = Omit<L & R, keyof (L | R)>;
// type Diff<L,R> = {
//   [P in (keyof L | keyof R) as Exclude<P, keyof L & keyof R>] : (L & R)[P]
// }