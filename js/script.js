const blogBtn = getButton('blogBtn');
const donationBtn = getButton('donationBtn');
const historyBtn = getButton('historyBtn');


blogBtn.addEventListener('click', function(){
    window.location.href = './logo.html';
});

donationBtn.addEventListener('click', function(){

    donationBtn.classList.add("bg-[#b4f461]");
    historyBtn.classList.remove("bg-[#b4f461]");

    const homeSection = document.getElementById('homeSection');
    homeSection.classList.remove('hidden');

    const historySection = document.getElementById('historySection');
    historySection.classList.add('hidden');

});

historyBtn.addEventListener('click', function(){

    historyBtn.classList.add("bg-[#b4f461]");
    donationBtn.classList.remove("bg-[#b4f461]");

    const homeSection = document.getElementById('homeSection');
    homeSection.classList.add('hidden');
    
    const historySection = document.getElementById('historySection');
    historySection.classList.remove('hidden');
});



const donateBtn1 = getButton('btn1');
const donateBtn2 = getButton('btn2');
const donateBtn3 = getButton('btn3');

donateBtn1.addEventListener('click', function(){

        const donateCounter = getAmountCount('donateCounter');
        const donateCount1 = getAmountCount('donateCount1');
        const inputDonate1 = getInputDonate('inputDonate1');

        if(inputDonate1 < 0 || isNaN(inputDonate1)){
            alert('invalid input');
        }

        else{
            const donateValue = donateCount1 + inputDonate1;
            const newDonateCounter = donateCounter - donateValue;

            donateCount1.innerText = donateValue.toFixed(2);
            donateCounter.innerText = newDonateCounter.toFixed(2);

            console.log(donateValue);
            console.log(newDonateCounter);

        }

        
});

donateBtn2.addEventListener('click', function(){

    const donateNumbers2 = getDonateNumbers('donateNumbers2');
    
    console.log(donateNumbers2);

})

donateBtn3.addEventListener('click', function(){

    const donateNumbers3 = getDonateNumbers('donateNumbers3');
    console.log(donateNumbers3);

})