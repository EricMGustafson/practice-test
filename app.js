const ageToVote = 10

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE
console.log("Q2")
let currentYear = 2022;
let jsReleaseYear = 1995;
let currentAge = currentYear - jsReleaseYear;

console.log("current age of JavaScript is " + currentAge)



if (ageToVote > 17) {
  console.log("JavaScript is old enough to vote")
} else {
  console.log("JavaScript is not old enough to vote")
}


console.log("Q3")
for (let i = 0; i < 101; i++) {
  if (i === 0) {
    console.log("Starting")
  } if (i === 100) {
    console.log(i + " Finished")
  } else if (i === 50) {
    console.log(i + " Halfway")
  } else if((i % 10) === 0){
    console.log(i)
  } 

}


console.log("Q4")
console.log(user.name + " lives at " + user.address.street + ", " + user.address.city)


console.log("Q5-a")
for (let j = 0; j < cases.length; j++) {
  console.log(cases[j].title + " " + cases[j].releaseYear)
}


console.log("Q5-b")
for (let k = 0; k < cases.length; k++) {
  if ( cases[k].releaseYear === 1903) {
    console.log(cases[k].title)
  }
}