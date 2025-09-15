//repetitive
console.log (1)
console.log (2)
console.log (3)

//   start      condition update
for (let i = 2; i<=20; i=i+2 ) {
    console.log(i)
}

//second type of for loop
fav_fruits = ["mango", "banana", "apple"];
fav_fruits.push("strawberry")
var popped = fav_fruits.pop()

var shifted = fav_fruits.shift()
fav_fruits.unshift("kiwi")

console.log(popped, shifted)

// for loop
for(let i=0; i<fav_fruits.length; i++){
    console.log(fav_fruits[i])
}

//python type shift
for (fruit of fav_fruits) {
    console.log(fruit)
}

//favorite ni sir roy
fav_fruits.forEach(print_fruit)

function print_fruit(fruit){
    console.log(fruit)
}

//while loops
i = 1;
while(i<=10){
    console.log(i);
    i++
}

//do while loops
i=1;
do {
     console.log (i);
     i++
} while (i<=3);

grades = [90, 88, 99, 98, 97,]

sum = 0;

for (let i = 0; i < grades.length; i++){
    sum+= grades[i]
}
console.log(sum)

console.log(Math.min(...grades))

min = 1000000000
for(i = 0; i <grades.length; i++){
    if (grades[i]>max){
        mix = grades[i]
    }
}
console.log(max)
grades.push(100,20)
grades.sort
console.log(grades)

