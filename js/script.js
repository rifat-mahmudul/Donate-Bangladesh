const blogBtn = getButton('blogBtn');
const donationBtn = getButton('donationBtn');
const historyBtn = getButton('historyBtn');

//Blog Button
blogBtn.addEventListener('click', function(){
    window.location.href = './logo.html';
});

//Donate Button
donationBtn.addEventListener('click', function(){

    donationBtn.classList.add("bg-[#b4f461]");
    historyBtn.classList.remove("bg-[#b4f461]");

    const homeSection = document.getElementById('homeSection');
    homeSection.classList.remove('hidden');

    const historySection = document.getElementById('historySection');
    historySection.classList.add('hidden');

    const footerSection = document.getElementById('footerSection');
    footerSection.classList.remove('hidden');

});


const donateBtn1 = getButton('btn1');
const donateBtn2 = getButton('btn2');
const donateBtn3 = getButton('btn3');


//card1 calculation
donateBtn1.addEventListener('click', function(){

        const donateCounter = parseFloat(document.getElementById('donateCounter').innerText);
        const donateCount1 = parseFloat(document.getElementById('donateCount1').innerText);
        const inputDonate1 = parseFloat(document.getElementById('inputDonate1').value);

        if(inputDonate1 <= 0 || isNaN(inputDonate1)){
            alert('Please Enter a valid amount');
            document.getElementById('inputDonate1').value = '';
        }

        else{
            const donateValue = donateCount1 + inputDonate1;
            const newDonateCounter = donateCounter - inputDonate1;

            document.getElementById('donateCount1').innerText = donateValue.toFixed(2);
            document.getElementById('donateCounter').innerText = newDonateCounter.toFixed(2);

            const myModal1 = document.getElementById('my_modal_1');
            myModal1.showModal();

        }
        
});

//card2 calculation
donateBtn2.addEventListener('click', function(){

    const donateCounter = parseFloat(document.getElementById('donateCounter').innerText);
    const donateCount2 = parseFloat(document.getElementById('donateCount2').innerText);
    const inputDonate2 = parseFloat(document.getElementById('inputDonate2').value);

    if(inputDonate2 <= 0 || isNaN(inputDonate2)){
        alert('Please Enter a valid amount');
        document.getElementById('inputDonate1').value = '';
    }

    else{
        const donateValue = donateCount2 + inputDonate2;
        const newDonateCounter = donateCounter - inputDonate2;

        document.getElementById('donateCount2').innerText = donateValue.toFixed(2);
        document.getElementById('donateCounter').innerText = newDonateCounter.toFixed(2);

        const myModal1 = document.getElementById('my_modal_1');
        myModal1.showModal();

    }

})

//card3 calculation
donateBtn3.addEventListener('click', function(){

    const donateNumbers3 = getDonateNumbers('donateNumbers3');
    console.log(donateNumbers3);

});



//History Button
historyBtn.addEventListener('click', function(){

    historyBtn.classList.add("bg-[#b4f461]");
    donationBtn.classList.remove("bg-[#b4f461]");

    const homeSection = document.getElementById('homeSection');
    homeSection.classList.add('hidden');
    
    const historySection = document.getElementById('historySection');
    historySection.classList.remove('hidden');

    const footerSection = document.getElementById('footerSection');
    footerSection.classList.add('hidden');


    const inputDonate1 = parseFloat(document.getElementById('inputDonate1').value);
    const inputDonate2 = parseFloat(document.getElementById('inputDonate2').value);
    const title1 = getTitle('title1');
    const title2 = getTitle('title2');
    const title3 = getTitle('title3');

    const historyItem1 = document.createElement('div');
    historyItem1.className = 'p-5 border border-gray-400 rounded-xl mb-8'
    historyItem1.innerHTML = `
    <h3 class=" font-extrabold text-xl mb-3 ">${inputDonate1} Taka is ${title1}</h3>
    <p>Date : ${new Date()}</p>
    `
    historySection.insertBefore(historyItem1, historySection.firstChild);

    const historyItem2 = document.createElement('div');
    historyItem2.className = 'p-5 border border-gray-400 rounded-xl mb-8'
    historyItem2.innerHTML = `
    <h3 class=" font-extrabold text-xl mb-3 ">${inputDonate2} Taka is ${title2}</h3>
    <p>Date : ${new Date()}</p>
    `
    historySection.insertBefore(historyItem2, historySection.firstChild);
});