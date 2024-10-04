{
	function assertAnyFunction<TType, TActual = AssertType<AnyFunction, TType>>(expected: TActual): void { }
	function assertAnyFunctionKey<TType, TActual = AssertKey<AnyFunction, TType>>(expected: TActual): void { }

	{ // Valid function types.
		assertAnyFunction <() => void>                    (true);
		assertAnyFunction <(...args: number[]) => number> (true);
	}

	{ // Function with custom properties.
		const f: AnyFunction = function () { };
		f.customProperty = f.undefinedProperty;
	}

	{ // Non-function types.
		assertAnyFunction <any>        (false);
		assertAnyFunction <Array<any>> (false);
		assertAnyFunction <boolean>    (false);
		assertAnyFunction <null>       (false);
		assertAnyFunction <number>     (false);
		assertAnyFunction <object>     (false);
		assertAnyFunction <string>     (false);
		assertAnyFunction <symbol>     (false);
		assertAnyFunction <undefined>  (false);
	}

	{ // Valid property keys.
		assertAnyFunctionKey <number> (true);
		assertAnyFunctionKey <string> (true);
		assertAnyFunctionKey <symbol> (true);
	}

	{ // Invalid property keys.
		assertAnyFunctionKey <any>        (false);
		assertAnyFunctionKey <Array<any>> (false);
		assertAnyFunctionKey <boolean>    (false);
		assertAnyFunctionKey <() => void> (false);
		assertAnyFunctionKey <null>       (false);
		assertAnyFunctionKey <object>     (false);
		assertAnyFunctionKey <undefined>  (false);
	}
}
