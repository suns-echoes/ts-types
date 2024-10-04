declare type Mutable<Target extends ObjectLike> = {
	-readonly [Key in keyof Target]: Target[Key];
};
