/**
 * The type for any kind of class.
 */
declare interface AnyClass extends AnyObject {
	new (...args: Array<any>): any,
}
