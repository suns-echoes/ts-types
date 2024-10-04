declare type Immutable<Target extends ObjectLike> = {
	+readonly [Key in keyof Target]: Target[Key];
};
