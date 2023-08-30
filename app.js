const expenses=[
  {
    date:"20230815",
    data:[
      {
        name: "Food",
        category: "Food & Drink",
        color:"#c9184a",
        value: 150000
      },
      {
        name:"Drink",
        category: "Food & Drink",
        color:"#a4133c",
        value: 30000
      },
      {
        name:"Snack",
        category: "Food & Drink",
        color:"#590d22",
        value: 20000
      },
      {
        name:"Rent",
        category: "Housing",
        color:"#ffea00",
        value: 1200000
      },
      {
        name:"Energy, utilities",
        category: "Housing",
        color:"#ffb700",
        value: 200000
      },
      {
        name:"Services",
        category: "Housing",
        color:"#ff8800",
        value: 300000
      },
      {
        name:"Clothes & shoes",
        category: "Shopping",
        color:"#56cfe1",
        value: 800000
      },
      {
        name:"Free time",
        category: "Shopping",
        color:"#0077b6",
        value: 100000
      },
      {
        name:"fuel",
        category: "Transportation",
        color:"#e0aaff",
        value: 200000
      },
      {
        name:"Public Transports",
        category: "Transportation",
        color:"#7b2cbf",
        value: 200000
      },
    ]
  },
  {
    date:"20230816",
    data:[
      {
        name: "Food",
        category: "Food & Drink",
        color:"#c9184a",
        value: 200000
      },
      {
        name:"Drink",
        category: "Food & Drink",
        color:"#a4133c",
        value: 50000
      },
      {
        name:"Rent",
        category: "Housing",
        color:"#ffea00",
        value: 1200000
      },
      {
        name:"Energy, utilities",
        category: "Housing",
        color:"#ffb700",
        value: 250000
      },
      {
        name:"fuel",
        category: "Transportation",
        color:"#e0aaff",
        value: 200000
      },
      {
        name:"Parking",
        category: "Transportation",
        color:"#9d4edd",
        value: 150000
      },
      {
        name:"Leasing",
        category: "Transportation",
        color:"#3c096c",
        value: 1000000
      },
      {
        name:"Active sport, fitness",
        category: "Life & Entertainment",
        color:"#2dc653",
        value: 300000
      },
      {
        name:"Hobbiest",
        category: "Life & Entertainment",
        color:"#4ad66d",
        value: 250000
      },
    ]
  },
  {
    date:"20230817",
    data:[
      {
        name: "Food",
        category: "Food & Drink",
        color:"#c9184a",
        value: 300000
      },
      {
        name:"Drink",
        category: "Food & Drink",
        color:"#a4133c",
        value: 70000
      },
      {
        name:"Snack",
        category: "Food & Drink",
        color:"#590d22",
        value: 50000
      },
      {
        name:"Rent",
        category: "Housing",
        color:"#ffea00",
        value: 1200000
      },
      {
        name:"Energy, utilities",
        category: "Housing",
        color:"#ffb700",
        value: 250000
      },
      {
        name:"fuel",
        category: "Transportation",
        color:"#e0aaff",
        value: 150000
      },
      {
        name:"Parking",
        category: "Transportation",
        color:"#9d4edd",
        value: 160000
      },
      {
        name:"Leasing",
        category: "Transportation",
        color:"#3c096c",
        value: 1500000
      },
      {
        name:"Active sport, fitness",
        category: "Life & Entertainment",
        color:"#2dc653",
        value: 300000
      },
      {
        name:"Hobbiest",
        category: "Life & Entertainment",
        color:"#4ad66d",
        value: 250000
      },
      {
        name:"Financial investments",
        category: "Investments",
        color:"#ff8fa3",
        value: 2500000
      },
      {
        name:"Realty",
        category: "Investments",
        color:"#ff4d6d",
        value: 500000
      },
      {
        name:"Saving",
        category: "Investments",
        color:"#c9184a",
        value: 1000000
      },
    ]
  }
]

App({
  onLaunch(options) {
    
  },
  onShow(options) {

  },
  globalData: {
    expenses:expenses,
    listAccount:[
      {
        name:"Cash",
        value:7000000,
        color: "#CD1818"
      },
      {
        name: "Investasi",
        value:1500000,
        color:"#D5CEA3"
      },
      {
        name: "Rumah",
        value: 2000000,
        color:"#46C2CB"
      }
    ],    
    categoryList:[
      {
        name:"Food & Drink",
        color:"#ff5400"
      },
      {
        name:"Housing",
        color:"#ffbd00"
      },
      {
        name:"Shopping",
        color:"#00b4d8"
      },
      {
        name:"Transportation",
        color:"#7b2cbf"
      },
      {
        name:"Life & Entertainment",
        color:"#70e000"
      },
      {
        name:"Investments",
        color:"#ff5d8f"
      },
      
    ],
    page:"Home"
  },

});