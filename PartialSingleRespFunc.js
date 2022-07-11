https://scrimba.com/learn/javascript/partial-application-for-single-responsibility-functions-cWKLakf8

function getSunFamily(lastName) {
    console.log("comes heres only once")
    return function getFullName(firstName){
        console.log("comes heres many times")
       return `${firstName} ${lastName}` 
    }
  
}

const sunFamilyGenerator = getSunFamily("Sun")
console.log(sunFamilyGenerator)

const person1 = sunFamilyGenerator("Joanne")
const person2 = sunFamilyGenerator("Ruben")
const person3 = sunFamilyGenerator("Cipher")

console.log("person1", person1)
console.log("person2", person2)
console.log("person3", person3)