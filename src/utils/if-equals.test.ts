{ // IfEquals
	type A = { a: 1 };
	type B = { a: 1 };
	type C = { a: 2 };

	{ // Should be true
		const Test1: true = {} as IfEquals<A, B>;
		const Test2: false = {} as IfEquals<A, C>;
	}

	{ // Should be false
		// @ts-expect-error
		const Test3: false = {} as IfEquals<A, B>;
		// @ts-expect-error
		const Test4: true = {} as IfEquals<A, C>;
	}
}
