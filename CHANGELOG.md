# CHANGELOG


## `2.4.0` / 2025-07-03

### New Utility Types

- Update documentation and clarity module usage.

| Type name        | Description
|------------------|-----------------------------------------------------
| `Fields<T>`      | Gets all fields from object or class.
| `FieldsRW<T>`    | Gets only readable and writable fields from object or class.
| `IfEquals<X, Y>` | Checks if type X is equal to type Y.

[⮝](#changelog)


## `2.1.0` / 2024-10-27

### New Utility Types

| Type name               | Description
|-------------------------|-----------------------------------------------------
| `PartialDeep<Target>`   | Make all properties in Target and nested objects optional.

[⮝](#changelog)



## `2.0.1` / 2024-10-17

### Bugfix

- Fix DeepExtensible bug that breaks non-object props types.

[⮝](#changelog)



## `2.0.0` / 2024-10-08 / 💔

### Bugfix 💔

- Replace interfaces with types.
  Now Any(Class|Function|Object) will not accept numbers as keys.
  *Previous behavior was buggy and not intended.*

[⮝](#changelog)



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
