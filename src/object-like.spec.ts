/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable func-call-spacing */
function assertObjectLike<TType, TActual = AssertType<ObjectLike, TType>>(expected: TActual): void { }
function assertObjectLikeKey<TType, TActual = AssertKey<ObjectLike, TType>>(expected: TActual): void { }


assertObjectLike		<any>			(false);
assertObjectLike		<any[]>			(true);
assertObjectLike		<boolean>		(false);
assertObjectLike		<cls>			(true);
assertObjectLike		<() => void>	(true);
assertObjectLike		<null>			(false);
assertObjectLike		<number>		(false);
assertObjectLike		<object>		(true);
assertObjectLike		<string>		(false);
assertObjectLike		<symbol>		(false);
assertObjectLike		<undefined>		(false);


assertObjectLikeKey		<number>		(true);
assertObjectLikeKey		<string>		(true);
assertObjectLikeKey		<symbol>		(true);
