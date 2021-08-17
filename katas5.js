// ----------------- 1 --------------------

function reverseString(str){
    let mainArray = str.split("")
    let mainString = ""

    for(let i=mainArray.length-1; i>=0; i--){
        mainString += mainArray[i]
    }

    return mainString
}

function testReverseString1(){
    let result = reverseString("Hello World!")
    let expected = "!dlroW olleH"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseString2(){
    let result = reverseString("Bananas are great")
    let expected = "taerg era sananaB"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// ----------------- 2 --------------------

function reverseSentece(str){
    let mainArray = str.split(" ")
    let secondArray = []

    for(let i=mainArray.length-1; i>=0; i--){
        secondArray.push(mainArray[i])
    }

    return secondArray.join(" ")

}

function testReverseSentece1(){
    let result = reverseSentece("I do not like dogs")
    let expected = "dogs like not do I"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentece2(){
    let result = reverseSentece("I love eating hamburgers")
    let expected = "hamburgers eating love I"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// ----------------- 3 --------------------

function minimumValue(arr){
    return Math.min(...arr)
}

function testMinimumValue1(){
    let result = minimumValue([1, 2, 3, 4, 5, 6, 7, 8])
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2(){
    let result = minimumValue([23, 57, 12, 63, 77, 24, 26, 81, 19])
    let expected = 12
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// ----------------- 4 --------------------

function maximumValue(arr){
    return Math.max(...arr)
}

function testMaximumValue1(){
    let result = maximumValue([1, 2, 3, 4, 5, 6, 7, 8])
    let expected = 8
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2(){
    let result = maximumValue([23, 57, 12, 63, 77, 24, 26, 81, 19])
    let expected = 81
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// ----------------- 5 --------------------

function calculateRemainder(divisor, dividend){
    return divisor % dividend
}

function testCalculateRemainder1(){
    let result = calculateRemainder(4, 2)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2(){
    let result = calculateRemainder(23, 2)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// ----------------- 6 --------------------

function distinctValues(str){
    let mainArray = str.split(" ")
    let secondArray = []

    for(let i=0; i<mainArray.length; i++){
        let test = secondArray.some((elt) => elt === mainArray[i])

        if (test === false){
            secondArray.push(mainArray[i])
        }
    }

    return secondArray.join(" ")
}

function testDistinctValues1(){
    let result = distinctValues("1 2 3 4 5 1 2 3 4 5")
    let expected = "1 2 3 4 5"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2(){
    let result = distinctValues("1 5 7 5 4 6 8 2 5 6 8") 
    let expected = "1 5 7 4 6 8 2"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// ----------------- 7 --------------------

function countValues(str){
    let mainArray = str.split(" ")
    let countArray = []
    let secondArray = []

    for(let i=0; i<mainArray.length; i++){
        if (countArray[mainArray[i]] === undefined){
            countArray[mainArray[i]] = 1
        } else{
            countArray[mainArray[i]] += 1
        }
    }

    for(let j=0; j<countArray.length; j++){
        if(countArray[j] !== undefined){
            secondArray.push(`${j}(${countArray[j]})`)
        }
    }

    return secondArray.join(" ")
}

function testCountValues1(){
    let result = countValues("1 2 3 1 2 3 1 2 3")
    let expected = "1(3) 2(3) 3(3)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCountValues2(){
    let result = countValues("1 5 6 7 4 3 5 6 7 4 3 5 6")
    let expected = "1(1) 3(2) 4(2) 5(3) 6(3) 7(2)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// ----------------- 8 --------------------

function evaluateExpression(str, obj){
    let mainArray = str.split(" ")
    let counter = obj[mainArray[0]]

    for(let i=1; i<mainArray.length; i+=2){
        if(mainArray[i] === "+"){
            counter += obj[mainArray[i+1]]
        } else if(mainArray[i] === "-"){
            counter -= obj[mainArray[i+1]]
        }
    }

    return counter
}

function testEvaluateExpression1(){
    let result = evaluateExpression("a + b - c + d", {a: 10, b: 5, c: 8, d: 7})
    let expected = 14
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testEvaluateExpression2(){
    let result = evaluateExpression("c - h + x - f + y", {f: -4, c: 5, x: 10, y: -18, h: 3})
    let expected = -2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}