
//Deposit Section Start
let depositInput = document.getElementById("depositInput");



let depositAddBtn = document.getElementById('depositAddBtn');
depositAddBtn.addEventListener('click',function(){ 
    let totalDeposit = parseFloat(document.getElementById("total-deposit").innerHTML);
    depoInput = parseFloat(depositInput.value);
    let total = depoInput + totalDeposit;
    document.getElementById("total-deposit").innerHTML = total;

    let balance = parseFloat(document.getElementById("total-balance").innerHTML);
    let totalBalance = balance +depoInput;
    document.getElementById("total-balance").innerHTML = totalBalance ;

})




//Deposit Section End


//Withdraw Section Start

let withdrawBtn = document.getElementById('withdraw-btn');

withdrawBtn.addEventListener('click', function(){
    let totalBalance = document.getElementById("total-balance").innerHTML; 
    if(totalBalance > 1000000 ){
        let withdrawInput = document.getElementById('withdraw-input');
        let withdraw = parseFloat(withdrawInput.value);
        let totalWithdraw = parseFloat(document.getElementById("total-withdraw").innerHTML);
        let finalWithdraw = totalWithdraw + withdraw ;
        document.getElementById("total-withdraw").innerHTML = finalWithdraw; 
        
        let finalTotalBalance = totalBalance - withdraw ;
        document.getElementById("total-balance").innerHTML= finalTotalBalance;
    }
    else{
        alert("You need to be above Birr 1000000 to withdraw")
    }
   
}) 

let interest = document.getElementById("interest");
interest.addEventListener('click',()=>{
    alert("Do you want Join The Telegram")
})


//Withdraw Section End

