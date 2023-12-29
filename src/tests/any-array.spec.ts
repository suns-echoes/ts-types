function assertAnyArray<TType, TActual = AssertType<AnyArray, TType>>(expected: TActual): void { }
function assertAnyArrayIndex<TType, TActual = AssertKey<AnyArray, TType>>(expected: TActual): void { }


assertAnyArray<any>(false); assertAnyArray<any>(true);
assertAnyArray<arr>(true);
assertAnyArray<boolean>(false);
assertAnyArray<cls>(false);
assertAnyArray<fn>(false);
assertAnyArray<null>(false);
assertAnyArray<number>(false);
assertAnyArray<object>(false);
assertAnyArray<string>(false);
assertAnyArray<symbol>(false);
assertAnyArray<undefined>(false);

assertAnyArrayIndex<any>(false); assertAnyArrayIndex<any>(true);
assertAnyArrayIndex<arr>(false);
assertAnyArrayIndex<boolean>(false);
assertAnyArrayIndex<cls>(false);
assertAnyArrayIndex<fn>(false);
assertAnyArrayIndex<null>(false);
assertAnyArrayIndex<number>(true);
assertAnyArrayIndex<object>(false);
assertAnyArrayIndex<string>(false);
assertAnyArrayIndex<symbol>(false);
assertAnyArrayIndex<undefined>(false);

{
	const a: AnyArray = [];

	a[1];
	a[2] = 'b';
	assertAnyObject<typeof a>(true);
}
