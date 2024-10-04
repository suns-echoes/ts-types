declare type MutableDeep<Target extends ObjectLike> = {
	-readonly [Key in keyof Target]: MutableDeep<Target[Key]>;
};
