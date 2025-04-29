"use strict";

// Init printOut and newLine functions
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

// --- Part 1 ---
// (Ingen endring her, beholdes som det er.)
printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
printOut(newLine());

const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kreditkonto",
  Pension: "Pensionkonto"
};

const accountTypesLine = Object.values(AccountType).join(", ");
printOut(accountTypesLine);
printOut(newLine());

// --- Part 2 ---
// (Ingen endring her, beholdes som det er.)
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
printOut(newLine());

class TAccount {
  #type;

  constructor(accountType) {
    this.#type = accountType;
  }

  toString() {
    return this.#type;
  }

  setType(newType) {
    const oldType = this.#type;
    this.#type = newType;
    printOut(`Account is changed from ${oldType} to ${newType}`);
    printOut(newLine());
  }
}

const myAccount = new TAccount("Brukskonto");
printOut(`myAccount = ${myAccount.toString()}`);
printOut(newLine());
myAccount.setType("Sparekonto");
printOut(`myAccount = ${myAccount.toString()}`);
printOut(newLine());

// --- Part 3 ---
// (Ingen endring her, beholdes som det er.)
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
printOut(newLine());

class BankAccount {
  #type;
  #balance;

  constructor(type, balance = 0) {
    this.#type = type;
    this.#balance = balance;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    printOut(`Account is changed from ${this.#type} to ${aType}`);
    this.#type = aType;
  }

  getBalance() {
    return this.#balance;
  }

  setBalance(newBalance) {
    this.#balance = newBalance;
  }

  deposit(aAmount) {
    this.#balance += aAmount;
    printOut(`Deposit of ${aAmount}, new balance is ${this.#balance.toFixed(2)}`);
    printOut(newLine());
  }

  withdraw(aAmount) {
    if (aAmount <= this.#balance) {
      this.#balance -= aAmount;
      printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance.toFixed(2)}`);
      printOut(newLine());
    } else {
      printOut("Insufficient funds for withdrawal");
      printOut(newLine());
    }
  }
}

const userAccount = new BankAccount("Normal", 0);
userAccount.deposit(100);
userAccount.withdraw(25);
printOut(`My account balance is ${userAccount.getBalance().toFixed(2)}`);
printOut(newLine());

// --- Part 4 ---
// (Ingen endring her, beholdes som det er.)
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
printOut(newLine());

class BankAccountWithLimits extends BankAccount {
  #withdrawCount;

  constructor(type, balance = 0) {
    super(type, balance);
    this.#withdrawCount = 0;
  }

  withdraw(aAmount) {
    switch (this.toString()) {
      case "Pensionkonto":
        printOut("You can't Withdraw from a Pensionkonto");
        break;
      case "Sparekonto":
        if (this.#withdrawCount < 3) {
          if (aAmount <= this.getBalance()) {
            this.setBalance(this.getBalance() - aAmount); // Setter ny balance
            this.#withdrawCount++;
            printOut(`Withdrawal of ${aAmount}, new balance is ${this.getBalance().toFixed(2)}`);
            printOut(newLine());
          } else {
            printOut("Insufficient funds for withdrawal");
            printOut(newLine());
          }
        } else {
          printOut("Withdrawal limit exceeded");
          printOut(newLine());
        }
        break;
      default:
        if (aAmount <= this.getBalance()) {
          this.setBalance(this.getBalance() - aAmount); // Setter ny balance
          printOut(`Withdrawal of ${aAmount}, new balance is ${this.getBalance().toFixed(2)}`);
          printOut(newLine());
        } else {
          printOut("Insufficient funds for withdrawal");
          printOut(newLine());
        }
        break;
    }
  }
}

const accountWithLimits = new BankAccountWithLimits("Sparekonto", 500);
accountWithLimits.deposit(200);
accountWithLimits.withdraw(100);
accountWithLimits.withdraw(100);
accountWithLimits.withdraw(100);
accountWithLimits.withdraw(100);

// --- Part 5: Currency Handling ---
// Definer Currency én gang her, før noen klasser bruker den
const Currency = {
  NOK: { value: 1.0000, name: "Norske kroner", symbol: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", symbol: "€" },
  USD: { value: 0.1091, name: "United States dollar", symbol: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", symbol: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", symbol: "₹" },
  AUD: { value: 0.1581, name: "Australienske dollar", symbol: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", symbol: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", symbol: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", symbol: "C$" },
  THB: { value: 3.3289, name: "Thai baht", symbol: "฿" }
};

class BankAccountWithCurrency extends BankAccountWithLimits {
  #currencyType;

  constructor(type, balance = 0, currencyType = "NOK") {
    super(type, balance);
    this.#currencyType = currencyType;
  }

  getCurrencyType() {
    return this.#currencyType;
  }

  setCurrencyType(newCurrency) {
    if (this.getCurrencyType() !== newCurrency) {
      const previousCurrency = this.getCurrencyType();
      const conversionRate = Currency[newCurrency].value / Currency[previousCurrency].value;
      const newBalance = this.getBalance() * conversionRate;
      this.setBalance(newBalance);
      this.#currencyType = newCurrency;

      printOut(`The account currency has changed from ${Currency[previousCurrency].name} to ${Currency[newCurrency].name}`);
      printOut(`New balance is ${this.getBalance().toFixed(2)}${Currency[newCurrency].symbol}`);
      printOut(newLine());
    } else {
      printOut("Currency is already the same, no change made.");
    }
  }
}

const currencyAccount = new BankAccountWithCurrency("Normal", 150, "NOK");

// --- Task 5: Deposit with Currency ---
currencyAccount.deposit(150);

// --- Task 6: Currency Conversion ---
// (Ingen endring her, beholdes som det er.)
printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
printOut(newLine());
currencyAccount.setCurrencyType("SEK");
currencyAccount.setCurrencyType("USD");
currencyAccount.setCurrencyType("EUR");

// --- Part 7: Multi-Currency Transactions ---
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut(newLine());

class BankAccountWithMultiCurrency {
  #type;         // Account type
  #balance = 0;  // Account balance
  #withdrawCount = 0; // Count of withdrawals
  #currencyType = "NOK"; // Default currency is NOK

  constructor(type, balance = 0, currencyType = "NOK") {
    this.#type = type;
    this.#balance = balance;
    this.#currencyType = currencyType;
  }

  toString() {
    return `${this.#balance.toFixed(2)} ${Currency[this.#currencyType].symbol}`;
  }

  setType(aType) {
    printOut(`Account is changed from ${this.#type} to ${aType}`);
    this.#type = aType;
  }

  // Get the balance with currency symbol
  getBalance() {
    return `${this.#balance.toFixed(2)} ${Currency[this.#currencyType].symbol}`;
  }

  // Private method to convert between currencies
  #convertCurrency(amount, fromCurrency, toCurrency) {
    return amount * (Currency[fromCurrency].value / Currency[toCurrency].value);
  }

  // Public method to deposit money in a specified currency
  deposit(aAmount, aType = "NOK") {
    const amountInAccountCurrency = this.#convertCurrency(aAmount, aType, this.#currencyType);
    this.#balance += amountInAccountCurrency;

    printOut(`Deposit of ${aAmount.toFixed(2)} ${Currency[aType].name}, new balance is ${this.#balance.toFixed(2)}${Currency[this.#currencyType].symbol}`);
    printOut(newLine());
  }

  // Public method to withdraw money in a specified currency
  withdraw(aAmount, aType = "NOK") {
    const amountInAccountCurrency = this.#convertCurrency(aAmount, aType, this.#currencyType);

    if (amountInAccountCurrency <= this.#balance) {
      this.#balance -= amountInAccountCurrency;
      printOut(`Withdrawal of ${aAmount.toFixed(2)} ${Currency[aType].name}, new balance is ${this.#balance.toFixed(2)}${Currency[this.#currencyType].symbol}`);
    } else {
      printOut("Insufficient funds for withdrawal");
    }
    printOut(newLine());
  }

  // Public method to change the account's currency type
  setCurrencyType(newCurrency) {
    if (this.#currencyType !== newCurrency) {
      const newBalance = this.#convertCurrency(this.#balance, this.#currencyType, newCurrency);
      printOut(`The account currency has changed from ${Currency[this.#currencyType].name} to ${Currency[newCurrency].name}`);
      this.#balance = newBalance;
      this.#currencyType = newCurrency;
      printOut(`New balance is ${this.#balance.toFixed(2)}${Currency[newCurrency].symbol}`);
    } else {
      printOut("Currency is already set to this type, no change made.");
    }
    printOut(newLine());
  }
}

// --- Task 7 execution ---
const multiCurrencyAccount = new BankAccountWithMultiCurrency("Normal", 0, "NOK");

// Test: Deposit and withdraw in different currencies and change the currency type
multiCurrencyAccount.deposit(12, "USD"); // Deposit 12 USD
multiCurrencyAccount.withdraw(10, "GBP"); // Withdraw 10 GBP

// Change the currency to CAD and withdraw
multiCurrencyAccount.setCurrencyType("CAD");

// Change the currency to INR
multiCurrencyAccount.setCurrencyType("INR");

// Withdraw remaining balance in a different currency (SEK)
multiCurrencyAccount.withdraw(multiCurrencyAccount.getBalance(), "SEK"); // Get the balance using getBalance()

// --- Task 8: Fill String to Fixed Length ---
printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
printOut(newLine());

// Funksjon for å fylle ut en streng til en spesifisert lengde
function fillStringToLength(inputString, targetLength, fillChar = " ") {
  while (inputString.length < targetLength) {
    inputString = fillChar + inputString;
  }
  return inputString;
}

// Test funksjonen med ulike lengder
printOut(fillStringToLength("123", 5, "0"));  // Fyller med "0" til lengden 5
printOut(fillStringToLength("test", 8, "*")); // Fyller med "*" til lengden 8
printOut(fillStringToLength("hello", 10, "_")); // Fyller med "_" til lengden 10