# Typescript course 2021 - freecodecamp.com

I followed this course: [Youtube URL](https://www.youtube.com/watch?v=gp5H0Vw39yw)

It is a strongly typed extention of javascript language.

It is a tools which help you to check errors in transpile time (build time) and not in runtime, it doesnt mean our code is safety of errors, though

> Typescript is just an enhancement of your javascript skill

lets you to think not only from your data type, it also makes you think in an architectural point of view, in how your different data types are going to communicate between each other


## Tools

### How to use tsconfig.json
We can use 
[./tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

Basic structure

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

## Type Definitions

### variables
we can use var, const, let to define variables
```typescript
let hello: string = 'world'; // implicity defined the data type
hello = 'foo'; // advantage agaisnt javascript, hello sticks to string data type during runtime and transpile
```

> Typescript transpile to ES3 by default 

### functions


It does not throw any error due to TS does not which types were defined for each param.

```javascript
const getFullName = (name, lastname) => {
  return name + ' '+lastname;
};

getFullName(true, [1,2,3]);
getFullName(1, 'hola');
```

In order to prevent this, we can define data type to each param

```typescript
const getFullName = (name: string, lastname: string) => {
  return name + ' '+lastname;
}

getFullName('gabriel', 'muller');
```
So now we can ensure getfullname recieves two strings as arguments, and due to the concat operation, 
TS already knows that the returned value of getfullname is another string.
However we should define everything explicity in order to prevent unusual ops, i.e if we don't define the type of the returned value, getfullname will return any value and not a string as we want to

```typescript
const getFullName = (name: string, lastname: string): string => {
  return name + ' '+lastname;
}
```

## Interfaces

Interfaces in Typescript help us to describe entities

```typescript
interface IUser {
  name: string; // this property is mandatory
  surname: string; // this property is mandatory
  age?: number; // this property is not mandatory
}
```

### Functions inside of interfaces

```typescript
interface IUser {
  name: string;
  surname: string;
  age?: number;
  getMessage(): string
}
const user: IUser = {
  name: 'Gabriel',
  surname: 'Muller',
  age: 31,
  getMessage() {
    return 'hello '+name;
  }
};
```

## Types and Unions

### Unions operator
Union operator lets us to combine different data types in a single property

> Advice from instructor: define a default value for your union operator declaration. This prevent your variable would be set as undefined

```typescript
let user: IUser | null | string = null;

user = 'hello';
user = {
  name: 'haha',
  surname: 'asd'
}
user = null;
```

### Types aliases

TS support a set of types (number, string, null, any) but it also lets us to define our own set of type aliases:

`type ID = string`

`Types` should be defined with Capital case like `interface`

```typescript
type PopularTag = string;

const popularTags: PopularTag[] = ['dragon', 'coffee'];
```
You can also combine unions and type aliases 

`Warning: I couldn't understand what the advantage of combining union operator and type aliases` 

```typescript
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

const dragonTags: MaybePopularTag = null
```

## Any / void / unknown / never data types

### void
```javascript
const foo = () => { // by default this arrow function returns void
  console.log('hello world')
}
```

By default the above arrow function returns void. As it's mentioned before, you should always define the type of the returned value 

```typescript
const foo = (): void => {
  console.log('hello world')
}
```

### any

The worst data type of TS. it's error prone (?)

### never
> Caution: Not so popular

### unknown

```typescript
let vAny: any = 10;
let vUnknown: unknown = 10;

const s1: string = vAny; // this is a valid move
const s2: string = vUnknown; // throws an error, you can not assign variables with unknown type, you should define s2 as unknown type as well
```

`unknown` type is useful when we don't know which type the property will be

### Type assertions

What's `type assertion`? It's mean when you want to convert a data type to another. 
How can we do this with typescript? `as` operator makes type assertion 

```typescript
const s2: string = vUnknown as string;
```


```typescript
let pageNumber: string = '1';
let numericPageNumber: number = (pageNumber as unknown) as number; // type casting or `as` data type
```

> Caution: you cannot convert from one data type to another without warnings. You should be careful when to use `as` operator.


