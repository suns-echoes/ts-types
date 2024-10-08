/**
 * The type for any kind of class.
 */
declare type AnyClass = AnyObject & {
	new (...args: Array<any>): any,
};
