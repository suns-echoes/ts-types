declare type ImmutableDeep<Target extends ObjectLike> = {
	+readonly [Key in keyof Target]: ImmutableDeep<Target[Key]>;
};
