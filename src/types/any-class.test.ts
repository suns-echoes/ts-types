{
	function assertAnyClass<TType, TActual = AssertType<AnyClass, TType>>(expected: TActual): void { }
	function assertAnyClassKey<TType, TActual = AssertKey<AnyClass, TType>>(expected: TActual): void { }

	{ // Valid class types.
		class Cls { }

		{
			assertAnyClass <typeof Cls> (true);
		}
	}

	{ // Non-class types.
		assertAnyClass <any>        (false);
		assertAnyClass <Array<any>> (false);
		assertAnyClass <boolean>    (false);
		assertAnyClass <() => void> (false);
		assertAnyClass <null>       (false);
		assertAnyClass <number>     (false);
		assertAnyClass <object>     (false);
		assertAnyClass <string>     (false);
		assertAnyClass <symbol>     (false);
		assertAnyClass <undefined>  (false);
	}

	{ // Valid property keys.
		assertAnyClassKey <number> (true);
		assertAnyClassKey <string> (true);
		assertAnyClassKey <symbol> (true);
	}

	{ // Invalid property keys.
		assertAnyClassKey <any>        (false);
		assertAnyClassKey <Array<any>> (false);
		assertAnyClassKey <boolean>    (false);
		assertAnyClassKey <() => void> (false);
		assertAnyClassKey <null>       (false);
		assertAnyClassKey <object>     (false);
		assertAnyClassKey <undefined>  (false);
	}
}
