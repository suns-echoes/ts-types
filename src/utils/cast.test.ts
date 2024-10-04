{ // Cast shallow.
	const o = {
		a: false,
		b: { c: 0 },
	};

	type NewType = {
		[key: string]: string,
	};

	{
		const r = o as unknown as Cast<typeof o, NewType>;

		r.a = 'false';
		r.b = '{ c: 0 }';
	}
}

{ // Cast deep.
	const o = {
		a: false,
		b: { c: 0 },
	};

	type NewType = {
		a: boolean,
		b: {
			c: string,
		},
	};

	{
		const r = o as unknown as Cast<typeof o, NewType>;

		r.b.c = '0';
		r.b = { c: 'zero' };

		{ // Should preserve NewType
			// @ts-expect-error
			r.b.c = 0;
			// @ts-expect-error
			r.b = { c: 0 };
			// @ts-expect-error
			r.a = 'false';
		}
	}
}
