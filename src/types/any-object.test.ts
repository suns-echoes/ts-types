{
	function assertAnyObject<TType, TActual = AssertType<AnyObject, TType>>(expected: TActual): void { }
	function assertAnyObjectKey<TType, TActual = AssertKey<AnyObject, TType>>(expected: TActual): void { }

	{ // Valid object types.
		assertAnyObject <Array<any>> (true);
		assertAnyObject <() => void> (true);
		assertAnyObject <object>     (true);
	}

	{ // Untyped properties.
		const o: AnyObject = {};
		o.customProperty = o.undefinedProperty;

		{
			assertAnyObject <typeof o> (true);
		}
	}

	{ // Valid property keys.
		assertAnyObjectKey <string> (true);
		assertAnyObjectKey <symbol> (true);
	}

	{ // Invalid property keys.
		assertAnyObjectKey <any>        (false);
		assertAnyObjectKey <Array<any>> (false);
		assertAnyObjectKey <boolean>    (false);
		assertAnyObjectKey <() => void> (false);
		assertAnyObjectKey <null>       (false);
		assertAnyObjectKey <number>     (false);
		assertAnyObjectKey <object>     (false);
		assertAnyObjectKey <undefined>  (false);
	}
}
