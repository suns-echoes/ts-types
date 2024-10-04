/**
 * A strings representing single keys in nested object path.
 */
declare type PathKey = string;

/**
 * An array of strings representing path consecutive keys in nested object.
 */
declare type PathKeys = PathKey[];

/**
 * A string representing path in nested object.
 */
declare type StringPath = string;

/**
 * The valid types for object keys.
 */
declare type ObjectKey = string | symbol;

/**
 * The type for any kind of object.
 */
declare interface AnyObject extends Record<ObjectKey, any> { }
