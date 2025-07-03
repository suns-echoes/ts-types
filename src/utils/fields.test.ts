{ // Fields
	const o = {
		rw: 123,
		get ro() {
			return 456;
		},
		method() {
			return 789;
		},
	};

	{ // Allow properties and getters, but not methods
		const f = o as Fields<typeof o>;
		f.rw;
		f.ro;
		// @ts-expect-error
		f.method();
	}
}
