function assertAnyObject<TType, TActual = AssertType<AnyObject, TType>>(expected: TActual): void { }
function assertAnyObjectKey<TType, TActual = AssertKey<AnyObject, TType>>(expected: TActual): void { }


assertAnyObject<any>(false); assertAnyObject<any>(true);
assertAnyObject<arr>(true);
assertAnyObject<boolean>(false);
assertAnyObject<cls>(true);
assertAnyObject<fn>(true);
assertAnyObject<null>(false);
assertAnyObject<number>(false);
assertAnyObject<object>(true);
assertAnyObject<string>(false);
assertAnyObject<symbol>(false);
assertAnyObject<undefined>(false);

assertAnyObjectKey<any>(false); assertAnyObjectKey<any>(true);
assertAnyObjectKey<arr>(false);
assertAnyObjectKey<boolean>(false);
assertAnyObjectKey<cls>(false);
assertAnyObjectKey<fn>(false);
assertAnyObjectKey<null>(false);
assertAnyObjectKey<number>(true);
assertAnyObjectKey<object>(false);
assertAnyObjectKey<string>(true);
assertAnyObjectKey<symbol>(true);
assertAnyObjectKey<undefined>(false);

{
	const o: AnyObject = {};

	o.a;
	o.b = 'b';
	assertAnyObject<typeof o>(true);
}
