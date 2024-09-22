const blogBtn = document.getElementById('blogBtn');
blogBtn.addEventListener('click', function(){
    window.location.href = './logo.html';
});

const donationBtn = document.getElementById('donationBtn');
donationBtn.addEventListener('click', function(){
    donationBtn.classList.add("bg-[#b4f461]");
    historyBtn.classList.remove("bg-[#b4f461]");
});

const historyBtn = document.getElementById('historyBtn');
historyBtn.addEventListener('click', function(){
    historyBtn.classList.add("bg-[#b4f461]");
    donationBtn.classList.remove("bg-[#b4f461]");
});