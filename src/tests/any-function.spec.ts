function assertAnyFunction<TType, TActual = AssertType<AnyFunction, TType>>(expected: TActual): void { }
function assertAnyFunctionKey<TType, TActual = AssertKey<AnyFunction, TType>>(expected: TActual): void { }


assertAnyFunction<any>(false); assertAnyFunction<any>(true);
assertAnyFunction<arr>(false);
assertAnyFunction<boolean>(false);
assertAnyFunction<cls>(false);
assertAnyFunction<fn>(true);
assertAnyFunction<null>(false);
assertAnyFunction<number>(false);
assertAnyFunction<object>(false);
assertAnyFunction<string>(false);
assertAnyFunction<symbol>(false);
assertAnyFunction<undefined>(false);

assertAnyFunctionKey<any>(false); assertAnyFunctionKey<any>(true);
assertAnyFunctionKey<arr>(false);
assertAnyFunctionKey<boolean>(false);
assertAnyFunctionKey<cls>(false);
assertAnyFunctionKey<fn>(false);
assertAnyFunctionKey<null>(false);
assertAnyFunctionKey<number>(true);
assertAnyFunctionKey<object>(false);
assertAnyFunctionKey<string>(true);
assertAnyFunctionKey<symbol>(true);
assertAnyFunctionKey<undefined>(false);

assertAnyFunction<() => void>(true);
assertAnyFunction<() => Promise<void>>(true);
assertAnyFunction<() => Promise<void>>(true);
assertAnyFunction<() => Generator<void>>(true);
assertAnyFunction<() => AsyncGenerator<void>>(true);
