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

	{ // Cast to extensible on root level only.
		const eo = o as Extensible<typeof o>;

		// @ts-expect-error
		eo.a.x = 123;
		eo.x = 123;
	}
}
