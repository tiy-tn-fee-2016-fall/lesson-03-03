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

// Let's make some HTML from our Javascript
const sumEl = document.createElement('h3');

// Put the sum heading at the end of the body
const container = document.querySelector('.container');
container.appendChild(sumEl);

sumEl.innerHTML = 'Thinking... <span class="fa fa-spinner fa-spin"></span>';
// Add the "subtitle" class to our heading
sumEl.classList.add('title');

// Wait 5 seconds
window.setTimeout(() => {
  // Put text inside of the h3
  sumEl.innerText = `The total in the bank is $${sum / 100}`;
}, 5000);

function createAccountCard(account, parentElement) {
  // Make a div with a class of "column"
  const column = document.createElement('div');
  column.classList.add('column');
  column.classList.add('is-4');
  parentElement.appendChild(column);
  column.innerHTML = `
  <div class="card is-fullwidth account">
    <div class="card-content">
      <h3 class="account__name title is-3"></h3>
      <h4 class="account__balance title is-4"></h4>
      <p class="account__card subtitle"></p>
    </div>
  </div>`;

  const name = column.querySelector('.account__name');
  const balance = column.querySelector('.account__balance');
  const card = column.querySelector('.account__card');

  name.innerText = account.name;
  balance.innerText = account.account_balance;
  card.innerText = account.cc;

  // Make a h3 with a class of "title" and a class of "is-2" and put the user name
  // Make a div with a class of "card"
  // Make a div with a class of "card-content"
  // Make an h4 with a class of "title" and a class of "is-3" and put the account balances
  // Make a p with a class of "subtitle" and fill it with the cc #
}

for (let counter = 0; counter < people.length; counter++) {
  createAccountCard(people[counter], document.querySelector('.columns'));
}
