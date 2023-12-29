function assertAnyClass<TType, TActual = AssertType<AnyClass, TType>>(expected: TActual): void { }
function assertAnyClassKey<TType, TActual = AssertKey<AnyClass, TType>>(expected: TActual): void { }


assertAnyClass<any>(false); assertAnyClass<any>(true);
assertAnyClass<arr>(false);
assertAnyClass<boolean>(false);
assertAnyClass<cls>(true);
assertAnyClass<fn>(false);
assertAnyClass<null>(false);
assertAnyClass<number>(false);
assertAnyClass<object>(false);
assertAnyClass<string>(false);
assertAnyClass<symbol>(false);
assertAnyClass<undefined>(false);

assertAnyClassKey<any>(false); assertAnyClassKey<any>(true);
assertAnyClassKey<arr>(false);
assertAnyClassKey<boolean>(false);
assertAnyClassKey<cls>(false);
assertAnyClassKey<fn>(false);
assertAnyClassKey<null>(false);
assertAnyClassKey<number>(true);
assertAnyClassKey<object>(false);
assertAnyClassKey<string>(true);
assertAnyClassKey<symbol>(true);
assertAnyClassKey<undefined>(false);
