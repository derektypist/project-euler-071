// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length==0 || num<3 || num>1000000 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 3 and 1000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `Numerator of the fraction immediately to the left of 3/7 is ${orderedFractions(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the numerator of the fraction immediately to the left of 3/7

    orderedFractions(8)       returns 2
    orderedFractions(9994)    returns 4283
    orderedFractions(500000)  returns 214283
    orderedFractions(1000000) returns 428570
*/
function orderedFractions(limit) {
    const fractions = [];
    const fractionValues = {};
    const highBoundary = 3/7;
    let lowBoundary = 2/7;
    for (let denominator=limit;denominator>2;denominator--) {
        let numerator = Math.floor((3*denominator-1)/7);
        let value = numerator/denominator;
        if (value > highBoundary || value< lowBoundary) continue;
        fractionValues[value] = [numerator,denominator];
        fractions.push(value);
        lowBoundary = value;
    }
    fractions.sort();
    return fractionValues[fractions[fractions.length-1]][0];
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}