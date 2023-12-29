declare type PathKeys = string[];


declare type AnyKey = number | string | symbol;
declare type ObjectKey = string | symbol;


declare interface AnyArray extends Array<any> { }

declare interface AnyClass extends AnyObject {
	new (...args: any[]): any,
}

declare interface AnyFunction extends AnyObject {
	(...args: any[]): any,
}

declare interface AnyObject  {
	[key: ObjectKey]: any,
}


declare interface ObjectLike extends Record<AnyKey, any> { }


declare type TypedArray = Uint8ClampedArray
	| Uint8Array | Uint16Array | Uint32Array
	| Int8Array | Int16Array | Int32Array
	| Float32Array | Float64Array;
