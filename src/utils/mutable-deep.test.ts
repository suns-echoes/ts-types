{
	interface ImmutableObject {
		get a(): boolean,
		get b(): {
			get c(): number,
		},
	}

	const io: ImmutableObject = {
		a: false,
		b: {
			c: 0,
		},
	};

	const mo = io as MutableDeep<typeof io>;

	{ // Should preserve types.
		// @ts-expect-error
		mo.b.c = '1';
		// @ts-expect-error
		mo.b = '{ c: 2 }';
		// @ts-expect-error
		mo.a = 'false';
	}

	{ // Should be mutable.
		mo.b.c = 1;
		mo.b = { c: 2 };
		mo.a = false;
	}
}
