{
	function assertTypedArray<TType, TActual = AssertType<TypedArray, TType>>(expected: TActual): void { }

	{ // Valid types.
		assertTypedArray <Uint8ClampedArray> (true);
		assertTypedArray <Uint8Array>        (true);
		assertTypedArray <Uint16Array>       (true);
		assertTypedArray <Uint32Array>       (true);
		assertTypedArray <Int8Array>         (true);
		assertTypedArray <Int16Array>        (true);
		assertTypedArray <Int32Array>        (true);
		assertTypedArray <Float32Array>      (true);
		assertTypedArray <Float64Array>      (true);
	}

	{ // Invalid types.
		assertTypedArray <any>        (false);
		assertTypedArray <Array<any>> (false);
		assertTypedArray <boolean>    (false);
		assertTypedArray <() => void> (false);
		assertTypedArray <null>       (false);
		assertTypedArray <number>     (false);
		assertTypedArray <object>     (false);
		assertTypedArray <string>     (false);
		assertTypedArray <symbol>     (false);
		assertTypedArray <undefined>  (false);
	}
}
