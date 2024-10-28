// Complete the function calculateAverage
const weather = [
    { city: "New York", temperature: 50, pressure: 1015 },
    { city: "Los Angeles", temperature: 70, pressure: 1010 },
    { city: "Chicago", temperature: 40, pressure: 1012 },
    { city: "Houston", temperature: 75, pressure: 1020 },
    { city: "Miami", temperature: 80, pressure: 1017 }
  ];
  const pressureThreshold = 1015;
  function calculateAverage(pressureThreshold){
    //Implement your function here
      const pressurevalue = weather.filter((selectedPressure)=>{
          return selectedPressure.pressure >= pressureThreshold
      })
      
      const tempvalues = pressurevalue.map((element)=>{
          
          return element.temperature;
      })
      
      const totalTemperature = tempvalues.reduce((acc,currentElement)=>{
          
          return acc+currentElement
          
      },0)
      
      let citiescount = tempvalues.length
      
      const averageTemp = totalTemperature/citiescount
      
      // return Math.round(averageTemp*10)/10; 
      
      return averageTemp.toFixed(1)
  }
  console.log(calculateAverage(pressureThreshold))
  //Output : 68.3