declare type PartialDeep<Target extends ObjectLike> = {
	[Key in keyof Target]?: PartialDeep<Target[Key]>;
};
