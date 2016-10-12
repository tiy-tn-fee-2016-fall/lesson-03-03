import 'whatwg-fetch';
// Pull in people data from people.json file
import people from './people';

// Get the name of the third account
console.log(people[2].name);

// Create a new list to store acct balances
var acctBalances = [];

// Loop through all of our people
for (let i = 0; i < people.length; i++) {
  const person = people[i];

  acctBalances.push(parseInt(person.account_balance));
}

let sum = 0;

for (let i = 0; i < acctBalances.length; i = i + 1) {
  // console.log('i: ', i, 'balance: ', acctBalances[i], 'sum: ', sum);
  sum = sum + acctBalances[i];
}

console.log(sum);
