type MyParameters<T> = T extends (...args: infer Args ) => unknown ? [...Args] : never;