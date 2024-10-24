// Complete the createUserObjects function
// Do not alter the starter code
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];

function createUserObjects(ids, names, images) {
    // Implement your function here

    // Use the map function on the ids array to iterate over each element
    // Hint: The map function takes a callback that receives the current element and its index as arguments

    // For each id, create an object with the following properties:
    // id: the current id
    // name: the corresponding element from the names array (use the index)
    // image: the corresponding element from the images array (use the index)
    
    // Return the resulting array of objects
    let answer = ids.map((id,index)=>{
        let obj = {};
        obj.id =ids[index]
        obj.name =names[index];
        obj.image=images[index];
        return obj;

        
        
    })

    console.log(answer)
}

let output = createUserObjects(ids,names,images);