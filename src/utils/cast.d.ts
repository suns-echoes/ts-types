declare type Cast<Target, NewType extends Record<any, any>> = {
	[Key in keyof Target]: NewType[Key];
}
