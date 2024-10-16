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
        //Write your code below
          const result =[...arr]
          
          for(let i = result.length-1; i>0;i--){
              const j = Math.floor(Math.random()*(i+1))
              let temp =result[i];
              result[i] = result[j]
              result[j]= temp
              
          }
          
          
        return result;
      };
    }
    return shuffle;
  }

const mainfun = main()
const shufflefun = mainfun(questions)();
console.log(`${shufflefun} shuffled value is `)
  