// 1. What is the Big O for this?
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
// 10. What Am I? - O(n)
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

// function TowerofHanoi(num) {
//   let board = [[],
//   [],
// ];
//   // base
//   if ()
// }

// 12. Iterative version - O()
// 13. Recursive Big O - O()
