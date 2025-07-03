# README

## About project

The collection of useful TypeScript type definitions and utility types.

[⮝](#readme)



## Installation

`npm i --save-dev @suns-echoes/ts-types`

[⮝](#readme)



## Usage

It might be necessary to add this module to `types` in `tsconfig.json`:

```jsonc
{
	// ...
	"compilerOptions": {
		// ...
	},
	"include": ["node_modules/@suns-echoes/ts-types", ...],
	// ...
}

```

or to add reference in your project:

```js
/// <reference types="@suns-echoes/ts-types" />
```

[⮝](#readme)



## Module Contents

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
| `Immutable<Target>`     | Shallow type cast into immutable type.
| `ImmutableDeep<Target>` | Deep type cast into immutable type.
| `Mutable<Target>`       | Shallow type cast into mutable type.
| `MutableDeep<Target>`   | Deep type cast into mutable type.
| `PartialDeep<Target>`   | Make all properties in Target and nested objects optional.

[⮝](#readme)



## License

Licensed under MIT

Copyright (c) 2022-2025 Aneta Suns

[⮝](#readme)
