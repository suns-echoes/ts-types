{
	interface A {
		a: number;
		b: {
			c: string;
			d: {
				e: boolean;
			};
		};
	}

	{ // Should require complete object.
		// @ts-expect-error
		const a: A = {
			a: 1,
		};
	}

	{ // Should require complete nested object.
		const a: A = {
			a: 1,
			// @ts-expect-error
			b: {
				c: '2',
			},
		};
	}

	{ // Should not require complete object.
		const a: PartialDeep<A> = {
			a: 1,
		};
	}

	{ // Should not require complete nested object.
		const a: PartialDeep<A> = {
			a: 1,
			b: {
				c: '2',
			},
		};
	}
}
