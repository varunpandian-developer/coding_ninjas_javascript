function main() {
    const questions = [
        "Question1",
        "Question2",
        "Question3",
        "Question4",
        "Question5"
    ];

    function shuffle(arr) {
        return function () {
            const result = [...arr]; // Make a copy of the input array.
            let currentIndex = result.length;
            while (currentIndex > 0) {
                const randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                // Swap the current element with the randomly-selected one.
                const temp = result[currentIndex];
                result[currentIndex] = result[randomIndex];
                result[randomIndex] = temp;
            }
            return result;
        };
    }

    // Return the shuffle function, passing questions as an argument
    return shuffle;
}

// Call main to get the shuffle function
const shufflefun = main(); // This directly returns the function with questions included

// Call the returned shuffle function to get shuffled questions
const shuffledQuestions = shufflefun(questions); 

const answer = shuffledQuestions()

// Output the shuffled array
console.log(`Shuffled value is: ${answer}`);
