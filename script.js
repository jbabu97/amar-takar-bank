// event handler for login area
const pushIn = document.getElementById('push_in');
pushIn.addEventListener('click', function () {
const loginArea = document.getElementById('login_area');
loginArea.style.display = 'none';

const transactionArea = document.getElementById('transaction_area');
transactionArea.style.display = 'block';
document.body.style.backgroundColor = '#84817a';
})

// event handler for submit area

    // current deposit
    const depositBtn = document.getElementById('deposit_btn');
    depositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit_amount').value;
    const depositNumber = parseFloat(depositAmount);
    
    const currentDeposit = document.getElementById('current_deposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = currentDepositNumber + number;
    document.getElementById('current_deposit').innerText = totalDeposit;

    // current balance
    const currentBalance = document.getElementById('current_balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositNumber;
    document.getElementById('current_balance').innerText = totalBalance;

    document.getElementById('deposit_amount').value = '';

});


    // withdraw

    const withdrawBtn = document.getElementById('withdraw_btn');
    withdrawBtn.addEventListener('click', function () {
        const withdrawAmount = document.getElementById('withdraw_amount').value;
        const withdrawNumber = parseFloat(withdrawAmount);
        
        const currentWithdraw = document.getElementById('current_withdraw').innerText;
        const currentWithdrawNumber = parseFloat(currentWithdraw);
        const totalWithdraw = currentWithdrawNumber + withdrawNumber;
        document.getElementById('current_withdraw').innerText = totalWithdraw;

        // balance
        const currentBalance = document.getElementById('current_balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = currentBalanceNumber - withdrawNumber;
        document.getElementById('current_balance').innerText = totalBalance;
        
        document.getElementById('withdraw_amount').value = '';
    });

    function balanceUpdate(id, number) {
        const currentBalance = document.getElementById(id).innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = currentBalanceNumber + number;
        document.getElementById(id).innerText = totalBalance;
    }
    