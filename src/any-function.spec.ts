/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable func-call-spacing */
function assertAnyFunction<TType, TActual = AssertType<AnyFunction, TType>>(expected: TActual): void { }
function assertAnyFunctionKey<TType, TActual = AssertKey<AnyFunction, TType>>(expected: TActual): void { }


assertAnyFunction		<any>										(false);
assertAnyFunction		<any[]>										(false);
assertAnyFunction		<boolean>									(false);
assertAnyFunction		<() => void>								(true);
assertAnyFunction		<null>										(false);
assertAnyFunction		<number>									(false);
assertAnyFunction		<object>									(false);
assertAnyFunction		<string>									(false);
assertAnyFunction		<symbol>									(false);
assertAnyFunction		<undefined>									(false);

assertAnyFunction		<() => Promise<void>>						(true);
assertAnyFunction		<(x: boolean) => string>					(true);
assertAnyFunction		<(x: boolean) => Promise<string>>			(true);
assertAnyFunction		<(x: number) => Generator<number>>			(true);
assertAnyFunction		<(x: number) => AsyncGenerator<number>>		(true);


// AssertAnyFunctionKey	<number>									(false);
assertAnyFunctionKey	<string>									(true);
assertAnyFunctionKey	<symbol>									(true);
