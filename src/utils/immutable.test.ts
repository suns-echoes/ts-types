{
	const mo = {
		a: false,
		b: {
			c: 0,
		},
	};

	const io = mo as Immutable<typeof mo>;

	{ // Should preserve types.
		// @ts-expect-error
		io.b.c = '1';
		// @ts-expect-error
		io.b = '{ c: 2 }';
		// @ts-expect-error
		io.a = 'false';
	}

	{ // Should be mutable.
		io.b.c = 1;
	}

	{ // Should not be mutable.
		// @ts-expect-error
		io.b = { c: 2 };
		// @ts-expect-error
		io.a = false;
	}
}
