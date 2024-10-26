const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const counts = {};  // This will hold our key-value pairs

for (let item of items) {
    if (counts[item]) {
        counts[item] += 1;  // Increment the count if the item already exists
    } else {
        counts[item] = 1;   // Initialize the count if it's the first occurrence
    }
}

console.log(counts);  // Output: { apple: 3, banana: 2, orange: 1 }


//using reduce function

const countlistoccurence=items.reduce((count,item)=>{
    if (count[item]) {
        count[item] += 1;  // Increment the count if the item already exists
    } else {
        count[item] = 1;   // Initialize the count if it's the first occurrence
    }


    return count;

},{});



//modernway 


const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];

const counts = fruits.reduce((accumulator, item) => {
    // Increment the count for each item or initialize it to 1
    accumulator[item] = (accumulator[item] || 0) + 1;
    return accumulator; // Return the accumulator
}, {}); // Initialize with an empty object

console.log(counts); // Output: { apple: 3, banana: 2, orange: 1 }
