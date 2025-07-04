console.log(isNaN(NaN));         // true
console.log(isNaN("hello"));     // true (bad - loosely checks)
console.log(Number.isNaN(NaN));  // ✅ true (strict)
console.log(Number.isNaN("hi")); // false ✅
// timestamp 1:14