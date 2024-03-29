///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 let totalPrice = cart.reduce((total, currVal) => {
    return total + currVal.price
 }, 0)

console.log(totalPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function clacFinalPrice(cartTotal, couponValue, tax){
    return cartTotal = cartTotal +(tax * cartTotal - couponValue)
}

console.log(clacFinalPrice(25035, 500, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
1. I think the resturaunt needs the name of the customer inorder to know how to address the customer.
2. Next the resturant needs to know how many people will be eating with this customer in order to know where they needed to be seated or if they will have to pull tables together
3. Then we need to make sure wether or not there will be children in this party so we know how many kids menus and cryons we need to grab.
4. Finally I think knowing any allergies is very important knowledge for a resturant to have about a customer so they can accommodate the customers specific food 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let comstumer = {
    name: "name",
    party: 2,
    children: null,
    allergies: false,

}