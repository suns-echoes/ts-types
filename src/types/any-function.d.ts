/**
 * The type for any kind of function.
 */
declare type AnyFunction = AnyObject & {
	(...args: Array<any>): any,
};
