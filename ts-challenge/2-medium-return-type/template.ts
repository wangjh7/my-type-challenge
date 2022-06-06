type MyReturnType<T> = T extends (...arg:any) => infer Returntype ? Returntype : never;
