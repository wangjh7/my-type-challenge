type Chainable<Obj={}> = {
  option<K extends string,V>(key:K extends keyof Obj ? never : K,value:V):Chainable<{[key in K]:V} & Obj>,
  get:()=>Obj,
}