/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const dogNames = (dog_names, dog_string) => {
    for (let dog of dog_names){
        if (dog_string .includes(dog)){
            console.log(dog, 'matched dog_name')
        }
        else {
            console.log(dog, 'no matches')
        }
    }
}

dogNames(["Max","HAS","PuRple","dog"], "Hello Max, my name is Dog, and I have purple eyes!")



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given
const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
 
function replaceEvens(arr){
    for(a of arr){
        if (arr.indexOf(a)%2 == 0){
            (arr.splice(arr.indexOf(a),1,'even index'))

        }
        else {
            continue
        }
    }
    console.log(arr)
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// Create a function that takes an integer as an argument and
//  returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if(number%2==0){
      return 'Even';}
    else{
      return "Odd"
    }
  }

console.log(even_or_odd(12))



// You are given the length and width of a 4-sided polygon. The polygon 
// can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Note: for the purposes of this kata you will assume that it is a square if its length 
// and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
    if(l == w){
      return l*w
    }
    else{
      return ((l*2)+(w*2))
    }
    
  };

console.log(areaOrPerimeter(3,3))
console.log(areaOrPerimeter(3,5))