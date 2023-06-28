// document.querySelector('#convert').addEventListener('click', convert)

// function convert () {
// // Get the value out of input
//     let temp = Number(document.querySelector('#cel').value)
// // Convert the value
//     temp = temp * 9/5 + 32
// // Show the value/result to the user
//     document.querySelector('#placeToYell').innerText = temp
// }

// Writre pseudo code first!!
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    // Need the value
    let enteredVal = Number(document.querySelector('#cel').value)
    // Convert value C to F
    let temp = enteredVal * 1.8 + 32
    // Show value to the user
    document.querySelector('h2').innerText = temp
}