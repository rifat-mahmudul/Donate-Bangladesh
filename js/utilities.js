function getButton(id){
    const button = document.getElementById(id);
    return button;
};

function getDonateNumbers(id){
    const donateNumber = parseFloat(document.getElementById(id).value);
    return donateNumber;
};

function getAmountCount(id){
    const amount = parseFloat(document.getElementById(id).innerText);
    return amount;
};