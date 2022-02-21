/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable func-call-spacing */
function assertAnyArray<TType, TActual = AssertType<AnyArray, TType>>(expected: TActual): void { }
function assertAnyArrayKey<TType, TActual = AssertKey<AnyArray, TType>>(expected: TActual): void { }


assertAnyArray		<any>			(false);
assertAnyArray		<any[]>			(true);
assertAnyArray		<boolean>		(false);
assertAnyArray		<cls>			(false);
assertAnyArray		<() => void>	(false);
assertAnyArray		<null>			(false);
assertAnyArray		<number>		(false);
assertAnyArray		<object>		(false);
assertAnyArray		<string>		(false);
assertAnyArray		<symbol>		(false);
assertAnyArray		<undefined>		(false);

{
	const a: AnyArray = [];

	a[1];
	a[2] = 'b';
	assertAnyObject<typeof a>(true);
}


assertAnyArrayKey	<number>		(true);
assertAnyArrayKey	<string>		(false);
assertAnyArrayKey	<symbol>		(false);
