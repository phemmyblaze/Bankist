'use strict';

// let arr = ["a", "b", "c", "d", "e"];

// console.log(arr.slice(2, -1))

// console.log(arr.splice(2))
// console.log(arr)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
//   if (movement > 0 ) {
//     console.log(`You deposited ${movement}`)
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`)
//   }
// }

// console.log('----------- ')
// movements.forEach(function(movement, i, arr) {
//   if (movement > 0 ) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`)
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// })

// console.log('------ARROW-----')
// movements.forEach((movement, i, arr) => {
//   if (movement > 0 ) {
//     console.log(`Movement ${i + 1}:You deposited ${movement}`)
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`)
//   }
// })

// ////map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// ///set

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const eurToUsd = 1.1;

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsusd = movements.map(function(mov) {
//   return mov * eurToUsd
// })

////ARROW FUNCTION

// const movementusd = movements.map(mov => mov * eurToUsd
// );
// console.log(movements)
// console.log(movementusd)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function(mov) {

//   return mov > 0
// })
// console.log(deposits)

// const withdraw = movements.filter(function(mov) {
//   return mov < 0;
// })
// console.log(withdraw)

// const withdraws = movements.filter(mov => mov < 0)
// console.log(withdraws)

// const totals = movements.reduce(function (mov, i) {
//   // console.log(i)
//   return mov + i;

// },0 )
// const totals = movements.reduce((mov, i) =>
//    mov + i ,0 )
// console.log(totals)

// let balance = 0;
// for (const mov of movements) balance += mov;
// console.log(balance)

// const max = movements.reduce((mov, i) => {
//   if (mov < i)
//     return mov
//   else
//     return i
// }, movements[0])

// console.log(max)

// const eurToUsd = 1.1;
// const totalBalance = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalance)

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account)

// const despositsfor = [];
// for (const mov of movements) if(mov < 0) despositsfor.push(mov);
// console.log(despositsfor)

// for (const mov of accounts) if(mov.owner === 'Jessica Davis') accountName.push(mov)
// console.log(mov)

// console.log(accountName)

// const accountName = [];

// const account = accounts.filter(function(mov) {
//   return mov.owner === 'Jessica Davis';
// })
// console.log(account)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const wrong = document.querySelector('.wrong-info');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///display transfer
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

///Calculating balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((arr, cur) => arr + cur, 0);

  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};
// calcDisplayBalance(account1.movements)

///display summary

const calcDisplaySummary = function (acc) {
  ///total income
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  ///Calculated the out going money
  const outgoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoing).toFixed(2)}`;

  ////Calculating the interest on desposit
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}£`;
};
// calcDisplaySummary(account1.movements)

///working with username
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  ///DISPLAY MOVEMENT
  displayMovements(acc.movements);

  ////display balance
  calcDisplayBalance(acc);

  ////display summary
  calcDisplaySummary(acc);
};

////Event handler
let currentAccount;
btnLogin.addEventListener('click', e => {
  ///This fix default reload on page
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.toLowerCase()
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    ////Display UI AND WELCOME MESSAGE
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(
      ' '
    )}`;

    containerApp.style.opacity = 100;
    wrong.style.display = 'none';

    //clear input field

    (inputLoginUsername.value = inputLoginPin.value = ''), inputLoginPin.blur();
    inputLoginUsername.blur();

    ///DISPLAY ACCOUNT DETAILS (update UI)
    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;

    (inputLoginUsername.value = inputLoginPin.value = ''), inputLoginPin.blur();
    inputLoginUsername.blur();

    wrong.style.display = 'block';
  }
});

///TRANSFER IMPLENTATION

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value.toLowerCase()
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    ///doing transfer to another account
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    ///DISPLAY ACCOUNT DETAILS (update UI)
    updateUI(currentAccount);
  }
});

///Loan implementation
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movements

    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

///closing account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // closeAccount = currentAccount === accounts.username && accounts.pin;
  if (
    inputCloseUsername.value.toLowerCase() === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index)

    ///Delete account
    accounts.splice(index, 1);

    ////Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputCloseUsername.blur();
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

  