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
    AccountId: "Card",
    CategoryId: "Food & Drink",
    SubcategoryId: "Groceries",
    amount: 100000,
    transactionDate: "04-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Food & Drink",
    SubcategoryId: "Snack",
    amount: 300000,
    transactionDate: "07-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Food & Drink",
    SubcategoryId: "Restaurant",
    amount: 350000,
    transactionDate: "08-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Housing",
    SubcategoryId: "Rent",
    amount: 700000,
    transactionDate: "09-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Housing",
    SubcategoryId: "Electricity",
    amount: 50000,
    transactionDate: "10-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Housing",
    SubcategoryId: "Repair",
    amount: 150000,
    transactionDate: "11-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Transportation",
    SubcategoryId: "Fuel",
    amount: 450000,
    transactionDate: "12-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Transportation",
    SubcategoryId: "Public Transportation",
    amount: 10000,
    transactionDate: "12-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Transportation",
    SubcategoryId: "Taxi",
    amount: 80000,
    transactionDate: "13-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Hobbies",
    amount: 120000,
    transactionDate: "14-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Travelling",
    amount: 1000000,
    transactionDate: "16-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Streaming",
    amount: 60000,
    transactionDate: "16-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Shopping",
    SubcategoryId: "Fashion",
    amount: 400000,
    transactionDate: "17-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Shopping",
    SubcategoryId: "Electronics",
    amount: 1500000,
    transactionDate: "17-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Shopping",
    SubcategoryId: "Pets",
    amount: 200000,
    transactionDate: "18-01-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Salary",
    SubcategoryId: null,
    amount: 12000000,
    transactionDate: "10-01-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Savings",
    CategoryId: "Investment",
    SubcategoryId: null,
    amount: 1000000,
    transactionDate: "15-01-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Card",
    CategoryId: "Bonus",
    SubcategoryId: null,
    amount: 2500000,
    transactionDate: "18-01-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Cash",
    CategoryId: "Side Job",
    SubcategoryId: null,
    amount: 1500000,
    transactionDate: "20-01-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Card",
    CategoryId: "Lottery",
    SubcategoryId: null,
    amount: 250000,
    transactionDate: "25-01-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Cash",
    CategoryId: "Food & Drink",
    SubcategoryId: "Groceries",
    amount: 500000,
    transactionDate: "01-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Food & Drink",
    SubcategoryId: "Snack",
    amount: 270000,
    transactionDate: "03-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Food & Drink",
    SubcategoryId: "Restaurant",
    amount: 30000,
    transactionDate: "06-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Housing",
    SubcategoryId: "Rent",
    amount: 200000,
    transactionDate: "09-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Housing",
    SubcategoryId: "Electricity",
    amount: 100000,
    transactionDate: "10-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Housing",
    SubcategoryId: "Repair",
    amount: 200000,
    transactionDate: "11-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Transportation",
    SubcategoryId: "Fuel",
    amount: 600000,
    transactionDate: "12-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Transportation",
    SubcategoryId: "Public Transportation",
    amount: 20000,
    transactionDate: "14-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Transportation",
    SubcategoryId: "Taxi",
    amount: 40000,
    transactionDate: "14-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Hobbies",
    amount: 200000,
    transactionDate: "15-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Travelling",
    amount: 2500000,
    transactionDate: "16-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Streaming",
    amount: 60000,
    transactionDate: "17-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Shopping",
    SubcategoryId: "Fashion",
    amount: 1000000,
    transactionDate: "17-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Shopping",
    SubcategoryId: "Electronics",
    amount: 2500000,
    transactionDate: "18-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Shopping",
    SubcategoryId: "Pets",
    amount: 150000,
    transactionDate: "20-02-23",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Salary",
    SubcategoryId: null,
    amount: 12000000,
    transactionDate: "10-02-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Savings",
    CategoryId: "Investment",
    SubcategoryId: null,
    amount: 2000000,
    transactionDate: "12-02-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Card",
    CategoryId: "Bonus",
    SubcategoryId: null,
    amount: 4500000,
    transactionDate: "15-02-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Cash",
    CategoryId: "Side Job",
    SubcategoryId: null,
    amount: 1500000,
    transactionDate: "21-02-23",
    transactionType: "Incomes"
  },
  {
    AccountId: "Card",
    CategoryId: "Lottery",
    SubcategoryId: null,
    amount: 150000,
    transactionDate: "27-02-23",
    transactionType: "Incomes"
  },
  {
    AccountId : "Card",
    CategoryId : "Shopping",
    SubcategoryId : "Pets",
    amount : 50000,
    transactionDate: "04-06-2023",
    transactionType : "Expense"
  },
  {
    AccountId : "Savings",
    CategoryId : "Shopping",
    SubcategoryId : "Electronics",
    amount : 120000,
    transactionDate: "11-06-2023",
    transactionType : "Expense"
  },
  {
    AccountId : "Cash",
    CategoryId : "Shopping",
    SubcategoryId : "Fashion",
    amount : 300000,
    transactionDate: "18-06-2023",
    transactionType : "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Food & Drink",
    SubcategoryId: "Groceries",
    amount: 85000,
    transactionDate: "05-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Food & Drink",
    SubcategoryId: "Snack",
    amount: 120000,
    transactionDate: "12-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Food & Drink",
    SubcategoryId: "Restaurant",
    amount: 75000,
    transactionDate: "19-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Housing",
    SubcategoryId: "Rent",
    amount: 950000,
    transactionDate: "06-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Housing",
    SubcategoryId: "Electricity",
    amount: 140000,
    transactionDate: "13-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Housing",
    SubcategoryId: "Repair",
    amount: 75000,
    transactionDate: "20-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Transportation",
    SubcategoryId: "Fuel",
    amount: 250000,
    transactionDate: "25-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Transportation",
    SubcategoryId: "Public Transportation",
    amount: 110000,
    transactionDate: "26-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Transportation",
    SubcategoryId: "Taxi",
    amount: 55000,
    transactionDate: "27-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Cash",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Hobbies",
    amount: 250000,
    transactionDate: "07-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Savings",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Travelling",
    amount: 110000,
    transactionDate: "14-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Life & Entertainment",
    SubcategoryId: "Streaming",
    amount: 55000,
    transactionDate: "21-06-2023",
    transactionType: "Expense"
  },
  {
    AccountId: "Card",
    CategoryId: "Salary",
    SubcategoryId: null,
    amount: 15000000,
    transactionDate: "01-06-2023",
    transactionType: "Income"
  },
  {
    AccountId: "Savings",
    CategoryId: "Investment",
    SubcategoryId: null,
    amount: 1500000,
    transactionDate: "08-06-2023",
    transactionType: "Income"
  },
  {
    AccountId: "Cash",
    CategoryId: "Bonus",
    SubcategoryId: null,
    amount: 3000000,
    transactionDate: "15-06-2023",
    transactionType: "Income"
  },
  {
    AccountId: "Savings",
    CategoryId: "Side Job",
    SubcategoryId: null,
    amount: 3000000,
    transactionDate: "22-06-2023",
    transactionType: "Income"
  },
  {
    AccountId: "Card",
    CategoryId: "Lottery",
    SubcategoryId: null,
    amount: 2000000,
    transactionDate: "29-06-2023",
    transactionType: "Income"
  },
]