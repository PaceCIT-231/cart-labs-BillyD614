const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array
        this.items.push(cookie)
        //add the price (number) to the currentPrice properties
        this.currentPrice = price + this.currentPrice
    },
    clear: function() {
        //reset the currentPrice and items properties
        this.currentPrice = 0
        this.items = []
    },
    getSummary: function() {
        let summary = `<p>Number of Items: ${this.items.length}</p>
            <h4>Details</h4>
            <p>${this.items.join('<br>')}</p>
            <p>Total Price: $${this.currentPrice}</p>`
        return summary
    },
}

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   
    console.log('The user is adding this type of cookie to their cart: ' , cookie)

    if (cookie == "peanut butter") {
        cart.addItem(cookie, 20)
    }

    else if (cookie == "sandies") {
        cart.addItem(cookie, 30)
    }

    else if(cookie == "party press") {
        cart.addItem(cookie, 35)
    }

    else if(cookie == "chocolate chip") {
        cart.addItem(cookie, 25)
    }

    let cartprint = document.querySelector("#cartItems")
        cartprint.innerHTML = cart.items.length

    let cartprintcookie = document.querySelector(".hoverText")
        cartprintcookie.innerHTML = cart.currentPrice
    //add 1 to the itemCount variable
    //add the correct price to the currentPrice variable

}

function darkMode() {
    // add your code here
    document.querySelector("body").style.color = "white"
    document.querySelector("body").style.backgroundColor = "black"

} 

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
        document.getElementById("summary-body").innerHTML = cart.getSummary()
        document.getElementById("summary").style.display = "block"
    cart.clear()
        let cartprintcookie = document.querySelector(".hoverText")
        cartprintcookie.innerHTML = cart.items.length
    //itemCount = 0
        let cartprint = document.querySelector("#cartItems")
        cartprint.innerHTML = cart.currentPrice
}

function clearCart() {
    cart.currentPrice = 0
    cart.items = []
    document.getElementById("cartItems").innerHTML = cart.items.length;
    document.querySelector(".hoverText").innerHTML = cart.currentPrice;
}