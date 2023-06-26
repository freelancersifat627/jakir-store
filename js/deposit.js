// step : 1
document.getElementById('deposit-btn').addEventListener('click' , function(){
    // console.log('deposit btn clicked');

    // step : 2
    const newDepositField = document.getElementById('deposit-field');
    const newDepositFieldStr = newDepositField.value;
    const newDepositFieldAmount = parseFloat(newDepositFieldStr);
    // console.log(newDepositFieldAmount);

    // step : 3
    newDepositField.value = '';

    // step : 4
    const depositTotalElement = document.getElementById('deposit-amount');
    const previousDepositTotalStr = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalStr);
    // console.log(previousDepositTotal);

    // step : 5
    const newDepositTotal = previousDepositTotal + newDepositFieldAmount;
    // console.log(newDepositTotal)
    depositTotalElement.innerText = newDepositTotal;

    // step : 6
    const previousBlanceElement = document.getElementById('total-balance');
    const previousBlanceTotalStr = previousBlanceElement.innerText;
    const previousBlanceTotalAmount = parseFloat(previousBlanceTotalStr);
    // console.log(previousBlanceTotalAmount);

    // step : 7
    const newBlanceTotal = previousBlanceTotalAmount + newDepositTotal;
    previousBlanceElement.innerText = newBlanceTotal;
})


// 2nd time:


// step: 1;
// document.getElementById('deposit-btn').addEventListener('click' , function(){
//     // console.log('btn clicked');
//     // step : 2
//     const previousDepositTotal = document.getElementById('deposit-field');
//     const previousDepositTotalStr = previousDepositTotal.value;
//     const previousDepositTotalAmount = parseFloat(previousDepositTotalStr);
//     // console.log(previousDepositTotalAmount);

//     // step: 3
//     previousDepositTotal.value = '';

//     // step: 4
//     const newDepositField = document.getElementById('deposit-amount');
//     const newDepositFieldAmount = newDepositField.innerText;
//     const newDepositFieldStr = parseFloat(newDepositFieldAmount);

//     // step: 5
//     const newDepositTotalElement = previousDepositTotalAmount + newDepositFieldStr;
//     newDepositField.innerText = newDepositTotalElement;

//     // stpe: 6
//     const previousBlanceElement = document.getElementById('total-balance');
//     const previousBlanceElementStr = previousBlanceElement.innerText;
//     const previousBlanceAmount = parseFloat(previousBlanceElementStr);

//     // step: 7
//     const newBlanceTotal = previousBlanceAmount + newDepositTotalElement;
//     previousBlanceElement.innerText = newBlanceTotal;
// })