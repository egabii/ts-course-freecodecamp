// Generics
// const foo = <T>(): boolean
// classes in typescript
// class is a sugar syntax around prototypes but a safer than classes in javascript
interface IPersona {
  getFullName(): string;
}

class Persona implements IPersona {
  // access modifier private / public /protected
  private name: string;
  protected lastname: string;
  public age: number;
  // readonly props behavior as constant within classes
  // readonly props can only be define once within constructor
  readonly unchangablename: string;

  constructor(name: string, lastname: string, age: number = 18) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.unchangablename = name;
  }

  static staticMethod(name: string, lastname: string) {
    const p = new Persona(name, lastname);
    p.getFullName();
  }

  getFullName(): string {
    return this.name + ' '+this.lastname
  }
}

class Admin extends Persona {
  private editor: string;
  // TS also provides static keyword
  static readonly maxAge: number = 50;

  constructor(editor: string = 'foo', name: string, lastname: string) {
    super(name, lastname);
    this.setEditor(editor)
  }

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}
// Typescript & DOM

const $fooElem = document.querySelector('.foo') as HTMLInputElement; 
// $fooElem is Element.
// Element is the highest class in hierarchy

console.log('you should never do this $fooElem', ($fooElem as any).value);

console.log('you should do this instead', $fooElem.value);

$fooElem.addEventListener('blur', (event) => {
  // Event is a highest class hierarchy thus EventTarget as well
  // target is a EventTarget intity (another highest class in hierarchy)
  const target = event.target as HTMLInputElement; // casting target
  console.log(target.value)
})

// previous lesssons

// const a:any =  {
//   foo: '1'
// };

// let hello: string = 'world'; // implicity defined the data type
// hello = 'foo'; // advantage agaisnt javascript, hello sticks to data type string during runtime and transpile

// const getFullName = (name: string, lastname: string) : string => {
//   return name + ' '+lastname; // ts already knows this function will return a string
//   // it is safer to define everything explicity
// }

// // getFullName(true, [1,2,3]);
// // getFullName(1, 'hola');
// getFullName('gabriel', 'muller');

// // it does not throw any error due to TS does not which types were defined for each param
// // in order to prevent this, we can define data type to each param

// interface IUser {
//   name: string; // this property is mandatory
//   surname: string; // this property is mandatory
//   age?: number; // this property is not mandatory
//   getMessage?(): string
// }
// const user:IUser = {
//   name: 'Gabriel',
//   surname: 'Muller',
//   age: 31,
//   getMessage() {
//     return 'hello '+ name;
//   }
// };

// console.log('hellloooooo ' + user.getMessage());
// // TS reads and understand the types of our properties object out of box
// // what if we forget to define one the properties
// const user2:IUser = {
//   name: 'Tatiana',
//   surname: 'Bacik',
//   getMessage() {
//     return 'hello '+name
//   }
// };

// let user3: IUser | null | string = null; // unions

// user3 = 'hello';
// user3 = {
//   name: 'haha',
//   surname: 'asd'
// }
// user3 = null;


