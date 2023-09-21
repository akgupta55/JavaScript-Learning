// Array it is and object, resizeable, 0 based index, shallow copy (same reffrence), deep copy (not on same refrence)

const myArr = [0,1,2,3,4,5]
const myArr2 = [0,1,"ajay",3.5,4,null,myArr] // array can contain different data types inculding itself

/*

console.log(myArr); // to print all element
console.log(myArr[0]); // to print element by asscing index which is 0 based
console.log(myArr2);

*/ 

const arr = new Array(1,2,3,4)
// console.log(arr);

// Array method


// arr.push(5); 
// console.log(arr);

// arr.push(6)
// arr.push(7)
// console.log(arr);
// arr.pop()
// console.log(arr);   


// arr.unshift(9)// Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(arr); 
// arr.shift()//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(3));

// Adds all the elements of an array into a string, separated by the specified separator string.
// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


// +++++++++++++ interviwe +++++++++++++++++++
const newArr1 = [0,1,2,3,4,5]
console.log("org ", newArr1);

// The beginning index of the specified portion of the array.
// If start is undefined, then the slice begins at index 0.
// Returns a copy of a section of an array.
const useSlice = newArr1.slice(1,3)
console.log("using Slice ", useSlice);
console.log("org ", newArr1);


// Removes elements from an array and, if necessary,
// inserts new elements in their place,
// returning the deleted elements.
const useSplice = newArr1.splice(1,3)
console.log("Using Splice", useSplice);
console.log("org ",newArr1);