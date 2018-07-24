//Operators
test('variable a should equal 2', () => {
    var a = 2 // you should always declare a variable using `var` before using it. A variable is declared once for each 'scope'
    expect(a).toBe(2)
});

test('variable b = a + 1 ', () => {
    var a = 2
    var b = a + 1
    expect(b).toBe(3)
});

test('increment variable a', () => {
    var a = 2
    a++
    expect(a).toBe(3)
});

test('decrement variable a', () => {
    var a = 2
    a--
    expect(a).toBe(1)
});

test('using compound assignment increment variable a by 2 ', () => {
    var a = 2
    a += 2
    expect(a).toBe(4)
});

test('using compound assignment reduce variable a by 2 ', () => {
    var a = 2
    a -= 2
    expect(a).toBe(0)
});

test('using compound assignment multiply variable a to equal 6 ', () => {
    var a = 2
    a *= 3
    expect(a).toBe(6)
});

test('using compound assignment divide variable a to equal 1 ', () => {
    var a = 2
    a /= 2
    expect(a).toBe(1)
});

//Values & Types
test('define a string in variable a', () => {
    var a = "blah"
    expect(typeof a).toBe("string")
});

test('define a number in variable a', () => {
    var a = 2
    expect(typeof a).toBe("number")
});

test('define a boolean in variable a', () => {
    var a = true
    expect(typeof a).toBe("boolean")
});

test('convert var a from string to number', () => {
    var a = "99"
    a = Number( a )
    expect(typeof a).toBe("number")
});

test('without changing var a or b, var c should be truthy', () => {
    //loose equal operator
    var a = "99"
    var b = 99
    var c = a == b // loose equal cooerces the left hand side argument to a number equivalent
    expect(c).toBe(true)
});

// This is a single line commment
/* This is a multi
   line
   comment */

