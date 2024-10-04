{
	function assertAnyArray<TType, TActual = AssertType<AnyArray, TType>>(expected: TActual): void { }
	function assertAnyArrayKey<TType, TActual = AssertKey<AnyArray, TType>>(expected: TActual): void { }

	{ // Valid array types.
		assertAnyArray <Array<any>> (true);
	}

	{ // Array with custom properties
		const a: AnyArray = [];
		a.customProperty = a.undefinedProperty;
	}

	{ // Non-array types
		assertAnyArray <any>        (false);
		assertAnyArray <boolean>    (false);
		assertAnyArray <() => void> (false);
		assertAnyArray <null>       (false);
		assertAnyArray <number>     (false);
		assertAnyArray <object>     (false);
		assertAnyArray <string>     (false);
		assertAnyArray <symbol>     (false);
		assertAnyArray <undefined>  (false);
	}

	{ // Valid index / property keys.
		assertAnyArrayKey <number> (true);
		assertAnyArrayKey <string> (true);
		assertAnyArrayKey <symbol> (true);
	}

	{ // Invalid index / property keys.
		assertAnyArrayKey <any>        (false);
		assertAnyArrayKey <Array<any>> (false);
		assertAnyArrayKey <boolean>    (false);
		assertAnyArrayKey <() => void> (false);
		assertAnyArrayKey <null>       (false);
		assertAnyArrayKey <object>     (false);
		assertAnyArrayKey <undefined>  (false);
	}
}
