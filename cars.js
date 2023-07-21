
//Car Class creation
class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
      }

      honk() {
        console.log('\ntuut tuut')
        console.log(`Brand : ${this.brand}`)
        console.log(`Model : ${this.model}`)
        console.log(`Year : ${this.year}`)
        console.log(`Color : ${this.color}`)
        console.log(`Price : ${this.price}`)
      }

      gasUtilisedForEachTurn(year){
        this.gas = this.gas - (5 + ( year - this.year )) 
      }
}

// Initating car classes with paramter values
let carsArray = []
const Honda = new Car("Honda", "CR-V", 2023, "Red", 50000, parseInt(45))
carsArray.push(Honda)
const Ford = new Car("Ford", "F-150", 2020, "Black", 25000, 30)
carsArray.push(Ford)
const BMW = new Car("BMW", "X5", 2022, "Green", 60000, 65)
carsArray.push(BMW)
const Mazda = new Car("Mazda", "CX-5", 2019, "White", 15000, 60)
carsArray.push(Mazda)
const Audi = new Car("Audi", "Q7", 2018, "Silver", 52000, 47)
carsArray.push(Audi)
const Kia =  new Car("Kia", "Forte", 2020, "Blue", 21000, 56)
carsArray.push(Kia)


//Calling honk() method from each class
Honda.honk();
Ford.honk();
BMW.honk();
Mazda.honk();
Audi.honk();
Kia.honk();


const currentYear = new Date().getFullYear();
let raceContainerEl = document.getElementById("raceContainer")



//race starts

for(i = 1; i <= 7; i++ ){
    let headingElement = document.createElement("h1")
    headingElement.textContent = `*********** Turn : ${i} ***************`
    raceContainerEl.appendChild(headingElement)
    console.log("\n*********** turn #: ", i, "***************")

    for(let car of carsArray)
    {
        let paraEl = document.createElement("p")
    if(car.gas >= (5 + ( currentYear - car.year))){
        car.gasUtilisedForEachTurn(currentYear);
        paraEl.textContent = `${car.brand} car complted turn ${i} successfully, gas left is ${car.gas}`
        console.log(`${car.brand} car complted turn ${i} successfully, gas left is ${car.gas}`)
    }
    else{
        console.log(`${car.brand} Car out of Gas`)
        paraEl.textContent = `${car.brand} Car out of Gas`
    }
    raceContainerEl.appendChild(paraEl)
    }
}
  



