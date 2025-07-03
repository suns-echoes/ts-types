{ // FieldsRW
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
		const f = o as FieldsRW<typeof o>;
		f.rw;
		// @ts-expect-error
		f.ro;
		// @ts-expect-error
		f.method();
	}
}
