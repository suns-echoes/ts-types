declare type FieldsRW<T> = {
	[K in keyof T as IfEquals<
		{ [Q in K]: T[K] },
		{ -readonly [Q in K]: T[K] },
		T[K] extends Function ? never : K,
		never
	>]: T[K]
}
