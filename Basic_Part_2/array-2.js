const student_details = ["ajay", "vijay", "ram"];
const another_student_details = ["shayam", "raju", "virat"];

// Appends new elements to the end of an array, and returns the new length of the array.
// student_details.push(another_student_details);
// console.log(student_details);
// console.log(student_details[3][1]);

// const all_student_details = student_details.concat(another_student_details)
// console.log(all_student_details);

// using spared oprator

const all_student_details = [...student_details, ...another_student_details];
// console.log(all_student_details);

const chain_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, [4, 5]]];
const single_array = chain_array.flat(Infinity)
// console.log(single_array);



// console.log(Array.isArray("AjayKuamr"));
// console.log(Array.from("AjayKuamr"));
// console.log(Array.from({name : "AjayKuamr"})); // interseting to asscces use key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

