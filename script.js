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
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function(mov) {
  
  return mov > 0
})
console.log(deposits)


const despositsfor = [];
for (const mov of movements) if(mov < 0) despositsfor.push(mov);
console.log(despositsfor)

const withdraw = movements.filter(function(mov) {
  return mov < 0;
})
console.log(withdraw)

const withdraws = movements.filter(mov => mov < 0)
console.log(withdraws)

// const totals = movements.reduce(function (mov, i) {
//   // console.log(i)
//   return mov + i;
 
// },0 )
const totals = movements.reduce((mov, i) =>
   mov + i ,0 )
console.log(totals)

let balance = 0;
for (const mov of movements) balance += mov; 
console.log(balance)

const max = movements.reduce((mov, i) => {
  if (mov < i)
    return mov
  else
    return i
}, movements[0])

console.log(max)

const eurToUsd = 1.1;
const totalBalance = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance)



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data



const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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
const displayMovements = function(movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    
        <div class="movements__value">${mov}€</div>
      </div>
    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)

  });
}
displayMovements(account1.movements);


///Calculating balance
const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((arr, cur) => arr + cur, 0);
 labelBalance.textContent = `${balance}€`;
}
calcDisplayBalance(account1.movements)


///display summary

const calcDisplaySummary = function (movements) {
  ///total income
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`

  ///Calculated the out going money
  const outgoing = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(outgoing)}`

  ////Calculating the interest on desposit 
  const interest = movements.filter(mov => mov > 0).map(deposit => deposit * 1.2/100).filter((int, i, arr) => { console.log(arr); return int >= 1 }).reduce((acc,  int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}£`
  
}
calcDisplaySummary(account1.movements)

///working with username
const createUsernames = function(accs) {
  
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map (name => name[0])
    .join('');
  })

};
createUsernames(accounts) 











