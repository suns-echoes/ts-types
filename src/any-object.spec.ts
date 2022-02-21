/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable func-call-spacing */
function assertAnyObject<TType, TActual = AssertType<AnyObject, TType>>(expected: TActual): void { }
function assertAnyObjectKey<TType, TActual = AssertKey<AnyObject, TType>>(expected: TActual): void { }


assertAnyObject		<any>			(false);
// AssertAnyObject		<Array<any>>	(false);
assertAnyObject		<boolean>		(false);
assertAnyObject		<cls>			(true);
// AssertAnyObject		<() => void>	(false);
assertAnyObject		<null>			(false);
assertAnyObject		<number>		(false);
assertAnyObject		<object>		(true);
assertAnyObject		<string>		(false);
assertAnyObject		<symbol>		(false);
assertAnyObject		<undefined>		(false);

{
	const o: AnyObject = {};

	o.a;
	o.b = 'b';
	assertAnyObject<typeof o>(true);
}


// AssertAnyObjectKey<number>(false);
assertAnyObjectKey	<string>		(true);
assertAnyObjectKey	<symbol>		(true);
