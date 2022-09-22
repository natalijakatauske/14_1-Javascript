// SORT
// Uzduotis 1
// Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

const friendsNames = ["John", "Paula", "Jeremy", "Emma"]
friendsNames.sort()

console.log(friendsNames)


// Uzduotis 2
// Pakoreguok pirmame pratime esantį sort, kad išrykiuotų
// Z-A tvarka.

const friendsNames1 = ["John",  "Paula", "Jeremy", "Emma"]
friendsNames1.sort((a, b) => b > a ? 1 : -1)

console.log(friendsNames1)

// Uzduotis 3
// Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir
// su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

const nums = [5, 10, 20, 11, 12, 1, 0, 14, 25]
nums.sort((a, b) => b - a)
console.log(nums)

// Uzduotis 4
// Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią
// skaičių (vieną skaičių).

const numbers = [10, 5, 20, 4]
numbers.sort((a, b) => b - a)
console.log(numbers[0])


// REDUCE
// Uzduotis 1
// Parašyk array su penkiais mėgstamiausiais tavo skaičiais.
// Su reduce visus juos sudėk ir grąžink vieną skaičių.

const reducedNumbers = [1, 3, 5, 8, 10]
console.log(reducedNumbers.reduce((a, v) => a + v))

// Uzduotis 2
// Ne vien skaičius sudėti galime. Nusikopijuok array
//(["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce -
//grąžink skaičių, kiek šiame array elementų yra su 3 simboliais
// (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"]
console.log(cars.reduce((a, v) => v.length === 3 ? a + 1 : a, 0))

// Uzduotis 3
//Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array
// naudojant reduce.

const manyNums = [5, 20, 101, 8, 50, 65, 1, 88, 44, 10, 9, 71, 38, 74, 5]
console.log(manyNums.reduce((a, v) => a > v ? a : v))


// Pratimai su JS masyvų metodais
const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];

  // Prafiltruojame masyvą, kad rodytų tik pilnamečius.
  console.log(people.filter((x) => x.age >= 18))

  // Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array
  // rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti:
  // ["Petras", "Antanas", "Diana"].
  console.log(people.filter((x) => x.age >= 18).map(person => person.name))

  // Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą,
  // kad visas veiksmas tilptų į vieną eilutę.
  console.log(people.filter((x) => x.age >= 18).map(person => person.name).sort())

  // Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie
  // turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią
  // prekes. Turi veikti padavus neribotą kiekį elementų
  // (pavyzdyje apačioje - tik du).
  // Pvz:
// iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
// grąžins: {brangiausias: "lemonade", pigausias: "lime"}

const drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

function fn(item) {
    item.sort((a, b) => a.price - b.price)
    return {brangiausias: item[item.length - 1].name, pigiausias: item[0].name}
}
console.log(fn(drinks))