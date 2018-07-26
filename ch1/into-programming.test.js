//Operators

describe('var a', () => {
    it('equals 2', () => {
        var a = 2 // you should always declare a variable using `var` before using it. A variable is declared once for each 'scope'
        expect(a).toBe(2)
    });

    it('variable b = a + 1 ', () => {
        var a = 2
        var b = a + 1
        expect(b).toBe(3)
    });

    it('increments variable a', () => {
        var a = 2
        a++
        expect(a).toBe(3)
    });

    it('decrements variable a', () => {
        var a = 2
        a--
        expect(a).toBe(1)
    });

    it('increments variable a by 2 using compound assignment', () => {
        var a = 2
        a += 2
        expect(a).toBe(4)
    });

    it('reduces variable a by 2 using compound assignment', () => {
        var a = 2
        a -= 2
        expect(a).toBe(0)
    });

    it('multiplies variable a to equal 6 using compound assignment ', () => {
        var a = 2
        a *= 3
        expect(a).toBe(6)
    });

    it('divides variable a to equal 1 using compound assignment ', () => {
        var a = 2
        a /= 2
        expect(a).toBe(1)
    });
});
    //Values & Types
describe('var a', () => {
    it('is a string', () => {
        var a = "blah"
        expect(typeof a).toBe("string")
    });

    it('is a number', () => {
        var a = 2
        expect(typeof a).toBe("number")
    });

    it('is a boolean', () => {
        var a = true
        expect(typeof a).toBe("boolean")
    });

    it('converts var a from string to number', () => {
        var a = "99"
        a = Number( a )
        expect(typeof a).toBe("number")
    });

});

it('var c should be truthy, without changing var a and b', () => {
    //loose equal operator
    var a = "99"
    var b = 99
    var c = a == b // loose equal cooerces the left hand side argument to a number equivalent
    expect(c).toBeTruthy()
});


// This is a single line commment
/* This is a multi
   line
   comment */

// Variables
describe('amount', () =>{
    var amount = 99.99

    it('should equal 199.98', () => {
        amount = amount * 2
        expect(amount).toBe(199.98)
    });

    it('should be "$199.98"', () => {
        amount = "$" + String(amount) // This demonstrates dynamic typing in JS, that a declared variable can hold values of any type.
        expect(amount).toBe("$199.98")
    });

    const TAX_RATE = 0.08// Constants prevent accidental changing of the values after inital declaration. JS will reject any changes to the constant and, in strict mode raise an error.

    it ('should be be increased by TAX_RATE', () => {
        amount = 99.99
        amount = amount + (amount * TAX_RATE)
        expect(amount).toBe(107.9892)
    });
})

// Functions

describe('sayHello', () => {
    it('should return hello', () => {
        function sayHello() {
            return "hello"
        }
        const a = sayHello();
        expect(a).toBe("hello")
    })
})

// Conditionals
    describe('isAffordable', () => {
    const BALANCE = 50
    var price = null

    function isAffordable(price, balance) {
        if( balance >= price ) {
            return true
        } else {
            return false
        }
    }

    it('should be true if amount is less than balance', () => {
        price = 40
        affordable = isAffordable(price, BALANCE)
        expect(affordable).toBe(true)
    })

    it('should be true if amount is greater than balance', () => {
        price = 60
        expect(isAffordable(price, BALANCE)).toBe(false)
    })

    it('should be true if amount equal balance', () => {
        price = 50
        expect(isAffordable(price, BALANCE)).toBe(true)
    })
})
