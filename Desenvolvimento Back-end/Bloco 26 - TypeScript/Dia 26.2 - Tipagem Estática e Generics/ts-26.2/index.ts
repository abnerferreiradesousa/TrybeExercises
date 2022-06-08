let listNames: [string, string] = ['John', 'Abner'];

type address = {
  street: string;
  city: string;
  houseNumber: number;
  district: string;
}

type bird = {
  fly: boolean;
  eagle: boolean;
  name: string;
  specie: string;
  heigth: number;
}

enum so {
  mac,
  linux,
}

export function printCPF(cpf:(number | string)) {
  return console.log(cpf);
}

export function sum(num1: number, num2: number): number {
  return num1 + num2
}

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor
  }

  speak(): void {
    console.log(`${this.name} está falando`);
  }

  eat(): void {
    console.log(`${this.name} está comendo`);
  }

  walk(): void {
    console.log(`${this.name} está andando`);
  }

}