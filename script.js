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
    '2020-03-30T23:36:17.929Z',
    '2023-04-05T10:51:36.790Z',
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
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelBalanceDate = document.querySelector('.balance__date');
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

////DATE

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

////currency
const formatcur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

///display transfer
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatedMov = formatcur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>        
        <div class="movements__value">${formatedMov}</div>
      </div>
    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

///Calculating balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((arr, cur) => arr + cur, 0);

  labelBalance.textContent = formatcur(acc.balance, acc.locale, acc.currency);
};
// calcDisplayBalance(account1.movements)

///display summary

const calcDisplaySummary = function (acc) {
  ///total income
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatcur(incomes, acc.locale, acc.currency);

  ///Calculated the out going money
  const outgoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatcur(
    Math.abs(outgoing),
    acc.locale,
    acc.currency
  );

  ////Calculating the interest on desposit
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatcur(interest, acc.locale, acc.currency);
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
  displayMovements(acc);

  ////display balance
  calcDisplayBalance(acc);

  ////display summary
  calcDisplaySummary(acc);
};

////logout timer
const startLogOutTimer = function () {

  const tick= function () {
    const mins = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    ////in each call, print the remaining time to ui
    labelTimer.textContent = `${mins}:${sec}`;

 

    ////when  0 seconds remain log out users
    if (time === 0) {
      clearInterval(timer)

      
      labelWelcome.textContent = `Log in to get started`
  
      containerApp.style.opacity = 0;

    }

       ///decrease 1s
       time--;
  }
  //setting time to 5 mins

  let time = 120;

  ///call timer every seconds
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

////Event handler
let currentAccount, timer;

btnLogin.addEventListener('click', e => {
  ///This fix default reload on page
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.toLowerCase()
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    ////Display UI AND WELCOME MESSAGE
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);

    wrong.style.display = 'none';

    //clear input field

    (inputLoginUsername.value = inputLoginPin.value = ''), inputLoginPin.blur();
    inputLoginUsername.blur();

    if(timer) clearInterval(timer)

    timer = startLogOutTimer();

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

    ///Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    ///DISPLAY ACCOUNT DETAILS (update UI)
    updateUI(currentAccount);


    ///reset timer
    clearInterval(timer)
    timer = startLogOutTimer();
  }
});

///Loan implementation
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movements
    setTimeout(function () {
      currentAccount.movements.push(amount);

      ///Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
      ///reset timer
      clearInterval(timer)
      timer = startLogOutTimer();
    }, 2500);
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

////sort btn
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const num = 3454334353.23;

// const options = {
//   style: "unit",
//   unit: "mile-per-hour"
// }

// console.log(new Intl.NumberFormat('en-US', options).format(num));
// console.log(new Intl.NumberFormat('de-DE', options).format(num));
// console.log(new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(new Intl.NumberFormat(navigator.language, options).format(num));

// const ingredients = ['oil']

// const spag = setTimeout((ing1, ing2) => console.log(`Here is your spag with ${ing1} and ${ing2}`), 3000, ...ingredients);
// console.log('waiting ....')

// if (ingredients.includes('onions')) clearTimeout(spag)

// setInterval(function() {
//   const now = new Date();
//   const option = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'

//     // weekday: 'long',
//   };
//   const dea = new Intl.DateTimeFormat(
//     navigator.locale,
//     option
//   ).format(now)
//   console.log(dea)
// },5000)
