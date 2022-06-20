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

myFunc(sub)
myFunc(sup)