declare type ExtensibleDeep<Target> = Target extends ObjectLike ? ({
	[Key in keyof Target]: ExtensibleDeep<Target[Key]>;
} & Record<string | symbol, any>) : Target;
