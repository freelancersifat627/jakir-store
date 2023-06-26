// step : 1
document.getElementById('withdraw-btn').addEventListener('click' , function(){
    // console.log('withdraw btn clicked');
    // step : 2
    const previousWithdrawField = document.getElementById('withdraw-field');
    const previousWithdrawFieldStr = previousWithdrawField.value;
    const previousWithdrawFieldAmount = parseFloat(previousWithdrawFieldStr);
    // console.log(previousWithdrawFieldAmount);

    // step: 3
    previousWithdrawField.value = '';

    // step: 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalAmountStr = withdrawTotalElement.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountStr);
    // console.log(withdrawTotalAmount);

    // step: 5
    const newWithdrawAmount = previousWithdrawFieldAmount + withdrawTotalAmount;
    withdrawTotalElement.innerText = newWithdrawAmount;

    // step: 6
    const previousBlanceElement = document.getElementById('total-balance');
    const previousBlanceAmountStr = previousBlanceElement.innerText;
    const previousBlanceAmount = parseFloat(previousBlanceAmountStr);
    // console.log(previousBlanceAmount);

    // step: 7 
    const newBlanceTotal = previousBlanceAmount - newWithdrawAmount;
    previousBlanceElement.innerText = newBlanceTotal;
})