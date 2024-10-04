declare type Extensible<Target extends ObjectLike> = {
	[Key in keyof Target]: Target[Key];
} & Record<string | symbol, any>;
