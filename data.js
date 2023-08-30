const categories = {
  "Expenses": {
    "Food & Drink" : {
      "icon" : "KoubeiFill",
      "color" : "red",
      "subcategories" : {
        "Groceries" : {
          "icon" : "CompassOutline",
          "color" : "red"
        },
        "Snack" : {
          "icon" : "CompassOutline",
          "color" : "red"
        },
        "Restaurant" : {
          "icon" : "CompassOutline",
          "color" : "red"
        }
      }
    },
    "Housing" : {
      "icon" : "KoubeiFill",
      "color" : "green",
      "subcategories" : {
        "Rent" : {
          "icon" : "CompassOutline",
          "color" : "green"
        },
        "Electricity" : {
          "icon" : "CompassOutline",
          "color" : "green"
        },
        "Repair" : {
          "icon" : "CompassOutline",
          "color" : "green"
        }
      }
    },
    "Transportation" : {
      "icon" : "TruckOutline",
      "color" : "purple",
      "subcategories" : {
        "Fuel" : {
          "icon" : "TruckOutline",
          "color" : "purple"
        },
        "Public Transportation" : {
          "icon" : "TruckOutline",
          "color" : "purple"
        },
        "Taxi" : {
          "icon" : "TruckOutline",
          "color" : "purple"
        }
      }
    },
    "Life & Entertainment" : {
      "icon" : "GiftOutline",
      "color" : "yellow",
      "subcategories" : {
        "Hobbies" : {
          "icon" : "GiftOutline",
          "color" : "yellow"
        },
        "Travelling" : {
          "icon" : "GiftOutline",
          "color" : "yellow"
        },
        "Streaming" : {
          "icon" : "GiftOutline",
          "color" : "yellow"
        }
      }
    },
    "Shopping" : {
      "icon" : "HandPayCircleOutline",
      "color" : "pink",
      "subcategories" : {
        "Fashion" : {
          "icon" : "HandPayCircleOutline",
          "color" : "pink"
        },
        "Electronics" : {
          "icon" : "HandPayCircleOutline",
          "color" : "pink"
        },
        "Pets" : {
          "icon" : "HandPayCircleOutline",
          "color" : "pink"
        }
      }
    }
  },
  "Incomes": {
    "Salary" : {
      "icon" : "ReceivePaymentOutline",
      "color" : "blue"
    },
    "Investment" : {
      "icon" : "HistogramOutline",
      "color" : "orange"
    },
    "Bonus" : {
      "icon" : "MailOutline",
      "color" : "brown"
    },
    "Side Job" : {
      "icon" : "TeamOutline",
      "color" : "yellow"
    },
    "Lottery" : {
      "icon" : "FlagOutline",
      "color" : "green"
    }
  }
}

const accounts = {
  "Card" : {
    "balance" : 5000000,
    "icon" : "BankcardOutline",
    "color" : "blue"
  },
  "Cash" : {
    "balance" : 1000000,
    "icon" : "PayCircleOutline",
    "color" : "green"
  },
  "Savings" : {
    "balance" : 10000000,
    "icon" : "BillOutline",
    "color" : "purple"
  }
}

const transactions = [
  {
    "AccountId" : "Card",
    "CategoryId" : "Shopping",
    "SubcategoryId" : "Pets",
    "amount" : 50000,
    "transactionDate": "04-06-2023",
    "transactionType" : "Expense"
  },
  {
    "AccountId" : "Savings",
    "CategoryId" : "Shopping",
    "SubcategoryId" : "Electronics",
    "amount" : 120000,
    "transactionDate": "11-06-2023",
    "transactionType" : "Expense"
  },
  {
    "AccountId" : "Cash",
    "CategoryId" : "Shopping",
    "SubcategoryId" : "Fashion",
    "amount" : 300000,
    "transactionDate": "18-06-2023",
    "transactionType" : "Expense"
  },
  {
    "AccountId": "Cash",
    "CategoryId": "Food & Drink",
    "SubcategoryId": "Groceries",
    "amount": 85000,
    "transactionDate": "05-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Savings",
    "CategoryId": "Food & Drink",
    "SubcategoryId": "Snack",
    "amount": 120000,
    "transactionDate": "12-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Card",
    "CategoryId": "Food & Drink",
    "SubcategoryId": "Restaurant",
    "amount": 75000,
    "transactionDate": "19-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Cash",
    "CategoryId": "Housing",
    "SubcategoryId": "Rent",
    "amount": 950000,
    "transactionDate": "06-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Savings",
    "CategoryId": "Housing",
    "SubcategoryId": "Electricity",
    "amount": 140000,
    "transactionDate": "13-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Card",
    "CategoryId": "Housing",
    "SubcategoryId": "Repair",
    "amount": 75000,
    "transactionDate": "20-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Cash",
    "CategoryId": "Transportation",
    "SubcategoryId": "Fuel",
    "amount": 250000,
    "transactionDate": "25-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Savings",
    "CategoryId": "Transportation",
    "SubcategoryId": "Public Transportation",
    "amount": 110000,
    "transactionDate": "26-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Card",
    "CategoryId": "Transportation",
    "SubcategoryId": "Taxi",
    "amount": 55000,
    "transactionDate": "27-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Cash",
    "CategoryId": "Life & Entertainment",
    "SubcategoryId": "Hobbies",
    "amount": 250000,
    "transactionDate": "07-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Savings",
    "CategoryId": "Life & Entertainment",
    "SubcategoryId": "Travelling",
    "amount": 110000,
    "transactionDate": "14-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Card",
    "CategoryId": "Life & Entertainment",
    "SubcategoryId": "Streaming",
    "amount": 55000,
    "transactionDate": "21-06-2023",
    "transactionType": "Expense"
  },
  {
    "AccountId": "Card",
    "CategoryId": "Salary",
    "SubcategoryId": "",
    "amount": 15000000,
    "transactionDate": "01-06-2023",
    "transactionType": "Income"
  },
  {
    "AccountId": "Savings",
    "CategoryId": "Investment",
    "SubcategoryId": "",
    "amount": 1500000,
    "transactionDate": "08-06-2023",
    "transactionType": "Income"
  },
  {
    "AccountId": "Cash",
    "CategoryId": "Bonus",
    "SubcategoryId": "",
    "amount": 3000000,
    "transactionDate": "15-06-2023",
    "transactionType": "Income"
  },
  {
    "AccountId": "Savings",
    "CategoryId": "Side Job",
    "SubcategoryId": "",
    "amount": 3000000,
    "transactionDate": "22-06-2023",
    "transactionType": "Income"
  },
  {
    "AccountId": "Card",
    "CategoryId": "Lottery",
    "SubcategoryId": "",
    "amount": 2000000,
    "transactionDate": "29-06-2023",
    "transactionType": "Income"
  },
]