{
	function assertObjectLike<TType, TActual = AssertType<ObjectLike, TType>>(expected: TActual): void { }
	function assertObjectLikeKey<TType, TActual = AssertKey<ObjectLike, TType>>(expected: TActual): void { }

	{ // Valid object types.
		assertObjectLike <Array<any>> (true);
		assertObjectLike <() => void> (true);
		assertObjectLike <object>     (true);
	}

	{ // Untyped properties.
		const o: ObjectLike = {};
		o.customProperty = o.undefinedProperty;

		{
			assertObjectLike <typeof o> (true);
		}
	}

	{ // Valid property keys.
		assertObjectLikeKey <number> (true);
		assertObjectLikeKey <string> (true);
		assertObjectLikeKey <symbol> (true);
	}

	{ // Invalid property keys.
		assertObjectLikeKey <any>        (false);
		assertObjectLikeKey <Array<any>> (false);
		assertObjectLikeKey <boolean>    (false);
		assertObjectLikeKey <() => void> (false);
		assertObjectLikeKey <null>       (false);
		assertObjectLikeKey <object>     (false);
		assertObjectLikeKey <undefined>  (false);
	}
}
