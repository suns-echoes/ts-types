function assertObjectLike<TType, TActual = AssertType<ObjectLike, TType>>(expected: TActual): void { }
function assertObjectLikeKey<TType, TActual = AssertKey<ObjectLike, TType>>(expected: TActual): void { }


assertObjectLike<any>(false); assertObjectLike<any>(true);
assertObjectLike<arr>(true);
assertObjectLike<boolean>(false);
assertObjectLike<cls>(true);
assertObjectLike<fn>(true);
assertObjectLike<null>(false);
assertObjectLike<number>(false);
assertObjectLike<object>(true);
assertObjectLike<string>(false);
assertObjectLike<symbol>(false);
assertObjectLike<undefined>(false);

assertObjectLikeKey<any>(false); assertObjectLikeKey<any>(true);
assertObjectLikeKey<arr>(false);
assertObjectLikeKey<boolean>(false);
assertObjectLikeKey<cls>(false);
assertObjectLikeKey<fn>(false);
assertObjectLikeKey<null>(false);
assertObjectLikeKey<number>(true);
assertObjectLikeKey<object>(false);
assertObjectLikeKey<string>(true);
assertObjectLikeKey<symbol>(true);
assertObjectLikeKey<undefined>(false);
