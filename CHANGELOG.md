# CHANGELOG


## `1.0.0` / 2024-10-03

### Types

| Type name     | Description
|---------------|---------------------------------------------------------------
| `AnyArray`    | Any type of object that have enumerable items.
| `AnyClass`    | Any type of class.
| `AnyFunction` | Any type of function.
| `AnyObject`   | Any type of object.
| `ObjectLike`  | Any type that behave similarly to object.
| `TypedArray`  | Any of typed arrays.

### Alias Types

| Type name     | Description
|---------------|---------------------------------------------------------------
| `PathKey`     | A strings representing single keys in nested object path.
| `PathKeys`    | An array of strings representing path consecutive keys in nested object.
| `StringPath`  | A string representing path in nested object.
| `ObjectKey`   | The valid types for object keys.

### Utility Types

| Type name               | Description
|-------------------------|-----------------------------------------------------
| `Cast<Target, NewType>` | Cast object type to another object type.
| `Immutable<Target>`     | Cast mutable data type into immutable on main level.
| `ImmutableDeep<Target>` | Cast mutable data type into immutable on all levels.
| `Mutable<Target>`       | Cast immutable data type into mutable on main level.
| `MutableDeep<Target>`   | Cast immutable data type into mutable on all levels.

### Other

- Back to MIT license.

[⮝](#changelog)



## `0.1.0` / 2023-12-30 / 💔

### 💔 Breaking Changes

- Remove `KeyPath` type.

### New Types

| Type name    | Description
|--------------|----------------------------------------------------------------
| `TypedArray` | The container type for JavaScript typed arrays.

### Improvements

- Refine types tests.
- Simplify project configuration.
- Remove all non-strictly required packages from dependencies.

### Other

- Change license from MIT to ISC.

[⮝](#changelog)



## `0.0.1` / 2022-02-21

The first proof-of-concept release.

### Types

| Type name     | Description
|---------------|---------------------------------------------------------------
| `AnyArray`    | Any type of object that have enumerable items.
| `AnyClass`    | Any type of class.
| `AnyFunction` | Any type of function.
| `AnyObject`   | Any type of object.
| `ObjectLike`  | Any type that behave similarly to object.

[⮝](#changelog)
