/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable func-call-spacing */
function assertAnyClass<TType, TActual = AssertType<AnyClass, TType>>(expected: TActual): void { }
function assertAnyClassKey<TType, TActual = AssertKey<AnyClass, TType>>(expected: TActual): void { }


assertAnyClass		<any>			(false);
assertAnyClass		<any[]>			(false);
assertAnyClass		<boolean>		(false);
assertAnyClass		<cls>			(true);
assertAnyClass		<() => void>	(false);
assertAnyClass		<null>			(false);
assertAnyClass		<number>		(false);
assertAnyClass		<object>		(false);
assertAnyClass		<string>		(false);
assertAnyClass		<symbol>		(false);
assertAnyClass		<undefined>		(false);


// AssertAnyClassKey	<number>		(true);
assertAnyClassKey	<string>		(true);
assertAnyClassKey	<symbol>		(true);
