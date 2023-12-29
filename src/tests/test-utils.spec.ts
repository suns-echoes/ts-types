interface arr extends Array<any> { }

interface cls {
	new (): any;
}

interface fn {
	(): any;
}


type AssertType<TBase, TAssert> = TAssert extends TBase ? true : false;

function assertType<TBase, TAssert, TActual = TAssert extends TBase ? true : false>(expected: TActual): void { }


type AssertKey<TBase, TKey> = TKey extends keyof TBase ? true : false;

function assertKey<TBase, TKey, TActual = TKey extends keyof TBase ? true : false>(expected: TActual): void { }


function DebugType<TBase, TAssert extends TBase, TActual = TAssert extends TBase ? true : false>(expected: TActual): void { }

function DebugKey<T, TKey extends keyof T, TActual = TKey extends keyof T ? true : false>(expected: TActual): void { }
