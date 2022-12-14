// method 1 - using normal function syntax
// const square = function (x) {
//     return x * x
// }

// method 2 - using arrow function syntax
// const square = (x) => {
//     return x * x
// }

// method 3 (shorthand syntax) - if there is just a single line of code in the function
// const square = (x) => x * x

// console.log(square(3))

//-------------arrow functions as properties on an object------------
// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name) // with our function as object properties we have access to the original object via this binding
//     }
// }

// refactoring above code using arrow function
// arrow functions don't bind their own this value - we don't have access to 'this', as a refrence to 'this' object
// arrow functions are not well suited for methods, properties that are functions when we want to access 'this' 
// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name) 
//     }
// }

const event = {
    name: 'Birthday Party',
    guestList: ['Chetna', 'Vidhi', 'Bhavya'],
    printGuestList() {
        // const that = this
        console.log('Guest list for ' + this.name) // with our function as object properties we have access to the original object via this binding
        
        // this.guestList.forEach(function (guest) {
        //     // console.log(guest + ' is attending ' + that.name)
        //     console.log(guest + ' is attending ' + this.name) // this doesn't work here
        // })

        // using arrow function 
        this.guestList.forEach((guest) => {
            // console.log(guest + ' is attending ' + that.name)
            console.log(guest + ' is attending ' + this.name) // this doesn't work here
        })
    }
}

event.printGuestList()