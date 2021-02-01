var subTotalFirstClass = 0;
var subTotalEconomy = 0;
var taxFirstClass = 0;
var taxEconomy = 0;
var grandTotal = 0; 

// FUNCTION FOR FIRST CLASS TICKET...
function handlerButtonFirstClass(isIncrease) {
    const firstClassInput = document.getElementById("firstClassInput");
    const firstClassInputNum = parseInt(firstClassInput.value);
    let totalFirstClassInput = firstClassInputNum;
    if (isIncrease == true) {
        totalFirstClassInput = firstClassInputNum + 1;
    }
    if (isIncrease == false && firstClassInputNum > 0) {
        totalFirstClassInput = firstClassInputNum - 1;
    }
    firstClassInput.value = totalFirstClassInput;       // SUBTOTAL FOR FIRST CLASS..
    subTotalFirstClass = totalFirstClassInput * 150;
    const subTotal = subTotalFirstClass + subTotalEconomy;
    document.getElementById("subTotal").innerText = subTotal;

    taxFirstClass = subTotalFirstClass * 0.1;           // TAX FOR FIRST CLASS...
    const taxTotal = taxFirstClass + taxEconomy;
    document.getElementById("tax").innerText = taxTotal;

    grandTotal= subTotal + taxTotal;                    // GRAND TOTAL...
    document.getElementById("grandTotal").innerText = grandTotal;
    
}

// FUNCTION FOR SECOND CLASS TICKET...
function handlerButtonEconomy(isIncrease) {
    const economyInput = document.getElementById("economyInput");
    const economyInputNum = parseInt(economyInput.value);
    let totalEconomyInput = economyInputNum;
    if (isIncrease == true) {
        totalEconomyInput = economyInputNum + 1;
    }
    if (isIncrease == false && economyInputNum > 0) {
        totalEconomyInput = economyInputNum - 1;
    }
    economyInput.value = totalEconomyInput;                     // SUBTOTAL FOR ECONOMY...
    subTotalEconomy = totalEconomyInput * 100;
    const subTotal = subTotalFirstClass + subTotalEconomy;
    document.getElementById("subTotal").innerText = subTotal;

    taxEconomy = subTotalEconomy * 0.1;                         // TAX FOR ECONOMY...
    const taxTotal = taxFirstClass + taxEconomy
    document.getElementById("tax").innerText = taxTotal;

    grandTotal = subTotal + taxTotal;                           // GRAND TOTAL....
    document.getElementById("grandTotal").innerText = grandTotal;
    
    
}

// BOOK NOW BUTTON ....
const bookNowBtn = document.getElementById('orderComplete').addEventListener('click', function () {

    var  flyingForm = document.getElementById("flyingFrom");
    var  flyingTo = document.getElementById("flyingTo");
    var departureTime = document.getElementById("departureTime");
    var returnTime = document.getElementById("returnTime");

    if (grandTotal == 0 || 
            flyingTo.value === '' || 
                 flyingForm.value === '' || 
                     departureTime.value === '' || 
                         returnTime.value ==='') {
        alert("Please, check your 'DESTINATION', 'DATE' & 'TICKET' !!")
    }
    else {
        const bookingArea = document.getElementById('booking-area');
        bookingArea.style.display = "none";
        const completeArea = document.getElementById('complete-area');
        completeArea.style.display = "block"
    }
})


