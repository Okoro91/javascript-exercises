# Exercise 3 - totalIntegers

Write a function that takes in an arbitrarily deep array or object and returns the total number of integers stored inside this array or object.

```javascript
totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // returns 7
totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4
```

1. Write a function totalIntegers(data)

2. Initialize a counter to 0

3. If data is an object:
   convert it to an array using Object.values()

4. Loop through each item in data:
   a. If item is an integer:
   increment counter
   b. Else if item is an array or object:
   recursively call totalIntegers(item)
   add the result to counter
   c. Else:
   ignore the item

5. Return the counter
