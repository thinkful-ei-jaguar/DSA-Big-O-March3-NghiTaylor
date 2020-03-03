// 1. What is the Big O for this?
// 1a) The big O is the task to stand up and yell out the inquiry.
// 1b) The big O is having to ask all breed owners until we found a matching breed.
// 2. The big O is checking to see if a value is even. If so, then return true and else false.
// 3. The big O is we have to check each index in the first array whether it matches any number in the 2nd array.
// 4. The big O is we have to multiply all numbers in the provided array.
// 5. The big O is we have to look through every number in the array to find the item being searched.
// 6. The big O is printing out 2 consecutive items of the array until the array ends and as many times as the length of the array.
// 7. The big O is pushing 1 generated number into an array as many times as the input number.
// 8. The big O is diving array a number of times to find the item being searched.
// 9. The big O is returning a random item in an array.
// 10. The big O is running the for loop until we find what the input number is divisible by.

// 11. Tower of Hanoi - O()
// Input/Output
// (3) => moved disk 1 to Rod C
// => moved disk 2 to Rod B
// => moved disk 1 to Rod B
// => moved disk 3 to Rod C
// => moved disk 1 to Rod A
// => moved disk 2 to Rod C
// => moved disk 1 to Rod C

// Algorithm
// Initial position: 0,0
// Always check for location of disk 1
// Checking if Rod C is empty, if so move the smallest disk there

function TowerofHanoi(num, source, dest, temp) {
  // base
  if (num === 1) {
    Print(source, dest);
  }
  if (num === 2) {
    Print(source, dest);
    Print(temp, source);
    Print(temp, dest);
    TowerofHanoi(num - 1, source, dest, temp);
  }
  while (num > 2) {
    Print(source, dest);
    Print(source, temp);
    Print(dest, temp);
    TowerofHanoi(num - 1, source, dest, temp);
  }

  //  if (num === 2) {
  //   Print(source, temp)
  //   Print(source, dest)
  //   TowerofHanoi(num-1, source, dest, temp)
  // }
  // else if(num % 2 !== 0) {
  //   Print(source, dest)
  //   Print(source, temp)
  //   TowerofHanoi(num-1, source, temp, dest)
  // }
  // else if(num%2 === 0) {
  //   Print(source, temp)
  //   Print(dest, source)
  //   Print(dest, temp)
  //   TowerofHanoi(num-1, source, dest, temp)
  // }
}

function Print(a, b) {
  console.log(`moved ${a} to ${b}`);
}

// TowerofHanoi(3, A, C, B) //first call //3 moves
// A->B //A->C
// A->C //A->B
// B->A //C->B

// B->C //A->C
// TowerofHanoi(2, A, B, C) //recursive //3 moves (6)
// //Tower call order (B = source, A= temp, C=dest) for (num <=2)
// A->C //B->A
//      //B->C
// TowerofHanoi(1, A, C, B) //1 move (7)
//      //A->C

//example 2-disk -->>
// A->B
// A->C
// B->C

/** 4-discs
 * A->B
 * A->C
 * B->C
 * A->B
 * C->A
 * C->B
 * A->B
 * -----3 smallest on C
 * A->C
 * B->C
 * B->A
 * C->A
 * B->C
 * A->B
 * A->C
 * B->C
 */

// 12. Iterative version
//1. counting sheep-
const countSheep = num => {
  for (let i = num; i >= 0; i--) {
    if (i === 0) {
      return "All the sheep over the fence";
    }
    return "Another sheep jumps over the fence";
  }
};
// console.log(countSheep(3));

//2. Power Calc-
const powerCalc = (base, exp) => {
  let result = 1;
  if (exp < 0) {
    return "exponent should be >= 0";
  }
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
};
//console.log(powerCalc(100, 2));

//3. Reverse string-
const reverseStr = str => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
// console.log(reverseStr("hello"));

//4. nth triangle-
const triangle = num => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
// console.log(triangle(9));

//5. string splitter-
const splitter = (str, split) => {
  let result = [];
  let rest = str;
  while (rest.includes(split)) {
    let idx = rest.indexOf(split);
    let first = rest.slice(0, idx);
    rest = rest.slice(idx + 1);
    result.push(first);
  }
  if (rest.length) {
    result.push(rest);
  }
  return result;
};

// console.log(splitter("02/20/2020", "/"));
//6. fibonacci-
const fib = num => {
  let result = [1, 1];
  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[result.length - 1];
};

//console.log(fib(7));
//7. factorial-
const fact = num => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(fact(5));

// 13. Recursive Big O - They're all linear time. The time complexity increases with the size of input.

// 14. Iterative Big O -
// 1a) O(1) - Regardless of how many dog owners there are in the room, we yell once to inquire and we get 1 reply
// 1b) O(n) - We have to ask each dog owner until we find a matching breed dog owner. Worst case is we have to ask every single dog owner.
// 2. Even or odd - O(1) Even or odd, 1 boolean value has to return.
// 3. Are you here? - O(n^2) Nested for loops, which means that the outer array will run thorugh the inner array for every element in the first array.
// 4. Doubler - O(n) Reads value of array only once each.
// 5. Naive Search - O(n) Reads once for each index in array to find the item
// 6. Creating pairs - O(n^2) Nested for loops, which means that the index of the outer loop will run through every index of the inner loop.
// 7. Compute the sequence - O(n) cause no matter how big of a numbner input, the program has to itterate once for every preceding number and excute only one statment.
// 8. An efficient search - O(log(n)) regardless of the input size of the array we're always cutting the array into halves to find the item.
// 9. Random element - O(1) Regardless of the input size of the array, the program will always return 1 random number from the array.
// 10. What Am I? - O(n) Moves through the for loop, at a approx. constant rate until the conditions are satisfied.
