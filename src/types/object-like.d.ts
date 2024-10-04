/**
 * The valid types for object-like keys.
 */
declare type AnyKey = number | string | symbol;

/**
 * The type for any kind of entity that can be extended like objects.
 */
declare interface ObjectLike extends Record<AnyKey, any> { }
