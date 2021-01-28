let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);
