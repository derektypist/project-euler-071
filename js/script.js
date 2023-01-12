// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length==0 || num<3 || num>1000000 || num[0]=="0" || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 3 and 1000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `Numerator of the fraction immediately to the left of 3/7 is ${orderedFractions(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}