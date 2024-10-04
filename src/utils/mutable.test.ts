{
	interface ImmutableObject {
		get a(): boolean,
		get b(): {
			get c(): number,
		}
	}

	const io: ImmutableObject = {
		a: false,
		b: {
			c: 0,
		},
	};

	const mo = io as Mutable<typeof io>;

	{ // Should preserve types.
		// @ts-expect-error
		mo.b.c = '1';
		// @ts-expect-error
		mo.b = '{ c: 2 }';
		// @ts-expect-error
		mo.a = 'false';
	}

	{ // Should not be mutable.
		// @ts-expect-error
		mo.b.c = 1;
	}

	{ // Should be mutable.
		mo.b = { c: 2 };
		mo.a = false;
	}
}
