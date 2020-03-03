// 1. What is the Big O for this?
// 1a) O(1) - Regardless of how many dog owners there are in the room, we yell once to inquire and we get 1 reply
// 1b) O(n) - We have to ask each dog owner until we find a matching breed dog owner. Worst case is we have to ask every single dog owner.
// 2. Even or odd - O(1) Even or odd, 1 boolean value has to return.
//3. Are you here? - O(n^2) Nested for loops, which means that the outer array will run thorugh the inner array for every element in the first array.
//4. Doubler - O(n) Reads value of array only once each.