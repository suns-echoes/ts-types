{
	const o = {
		a: { b: 0 },
		c: false,
	};

	{ // Type should not be extensible.
		// @ts-expect-error
		o.a.x = 123;
		// @ts-expect-error
		o.x = 123;
	}

	{ // Cast to extensible.
		const eo = o as ExtensibleDeep<typeof o>;

		eo.a.x = 123;
		eo.x = 123;
	}
}
