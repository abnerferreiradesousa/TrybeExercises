let number = 4;
let newA = [];
let result = 0;

for (let index = number; index > 0; index -= 1) {
    newA.push(index)
    // console.log(index - 1);
    let number *= index;
    console.log(number);
}