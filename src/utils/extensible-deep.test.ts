{ // ExtensibleDeep
	const o = {
		a: { b: 0 },
		c: false,
	};

	{ // Initial checks.
		// @ts-expect-error
		o.a.x = 123;
		// @ts-expect-error
		o.x = 123;
	}

	const eo = o as ExtensibleDeep<typeof o>;

	{ // Should be extensible.
		eo.a.x = 123;
		eo.x = 123;
	}

	{ // Should preserve types.
		// @ts-expect-error
		eo.a.b = '123';
		eo.c = true;
	}
}
