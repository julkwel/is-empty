# @julkwel/is-empty

Testing an array, string or int is empty null or 0

## Installation :
`yarn add @julkwel/is-empty` or `npm install @julkwel/is-empty`

## Usage : 
```
const {isEmpty} = require("@julkwel/is-empty");

console.log(isEmpty("0")); // output : true
console.log(isEmpty("    ")); // output : true
console.log(isEmpty(null)); // output : true


console.log(isEmpty("10")); // output: false
console.log(isEmpty("a")); // output: false
```

Feel free to reach out to me.
