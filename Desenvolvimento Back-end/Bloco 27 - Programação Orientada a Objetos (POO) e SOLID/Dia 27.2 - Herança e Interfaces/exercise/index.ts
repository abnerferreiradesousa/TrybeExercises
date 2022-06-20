
interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {
    
  }

  myFunc(myParam: number): string {
      return (myParam + this.myNumber).toString()
  }
}

const obj = new MyClass(22);
// console.log(obj.myFunc(50));


//=========================================================
class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true
  }

  sayHello() {
    return console.log("Olá mundo!")
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false
  }
}

const sub = new Subclass();
const sup = new Superclass();

const myFunc = (value: Superclass) => {
  console.log(value.isSuper ? 'Super!' : 'Sub!');
  return value.sayHello();
}

// myFunc(sub)
// myFunc(sup)