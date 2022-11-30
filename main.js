// Writre pseudo code first!!
// document.querySelector('h1').addEventListener('click', convert)

// function convert() {
//     // Need the value
//     let enteredVal = Number(document.querySelector('input').value)
//     // Convert value C to F
//     let temp = enteredVal * 1.8 + 32
//     // Show value to the user
//     document.querySelector('h2').innerText = temp
// }

// //Write your pseduo code first! 
// document.querySelector('h1').addEventListener('click', convert)

// function convert(){
//     //need the value
//     let enteredVal = Number(document.querySelector('input').value)
//     //convert value c to f
//     let temp = enteredVal * 1.8 + 32
//     //show value to the user
//     document.querySelector('h2').innerText = temp
// }


document.querySelector('#convert').addEventListener('click', convert)

function convert () {
// Get the value out of input
    let temp = Number(document.querySelector('#cel').value)
// Convert the value
    temp = temp * 9/5 + 32
// Show the value/result to the user
    document.querySelector('#placeToYell').innerText = temp
}

// Get the value of he input
// document.querySelector('h1').addEventListener('clock', convert)

// function convert () {
//     // need the value
//     let EnteredValue = Number(document.querySelector('input').value)
//     // Convert the value C to F
//     let temp = EnteredValue * 1.8 + 32
//     // Show value/result to the user
//     document.querySelector('h2').innerText = temp
// }