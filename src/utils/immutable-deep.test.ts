{
	const mo = {
		a: false,
		b: {
			c: 0,
		},
	};

	const io = mo as ImmutableDeep<typeof mo>;

	{ // Should not be mutable.
		// @ts-expect-error
		io.b.c = 1;
		// @ts-expect-error
		io.b = { c: 2 };
		// @ts-expect-error
		io.a = false;
	}
}
