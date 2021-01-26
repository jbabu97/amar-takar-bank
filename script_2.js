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
    const depositNumber = inputAmount('deposit_amount')

    balanceUpdate('current_deposit', depositNumber);
    balanceUpdate('current_balance', depositNumber);

    emptyInput('deposit_amount');

    });


    // withdraw

    const withdrawBtn = document.getElementById('withdraw_btn');
    withdrawBtn.addEventListener('click', function () {
        const withdrawNumber = inputAmount('withdraw_amount');

        balanceUpdate('current_withdraw', withdrawNumber);
        balanceUpdate('current_balance', -1* withdrawNumber);
        
        emptyInput('withdraw_amount');
    });

    function inputAmount(id) {
        const depositAmount = document.getElementById(id).value;
        const amount = parseFloat(depositAmount);
        return amount;
    }

    function balanceUpdate(id, number) {
        const currentBalance = document.getElementById(id).innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = currentBalanceNumber + number;
        document.getElementById(id).innerText = totalBalance;
    }

    function emptyInput(id) {
        const empty = document.getElementById(id).value = '';
        return empty;
    }
    