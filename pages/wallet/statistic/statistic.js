import {formatRupiah,formatDateApp} from "../../../util"
const appData = getApp().globalData
const tabbarList = [
  {title:"BALANCE"},
  {title:"OUTLOOK"},
  {title:"CASH-FLOW"},
  {title:"SPENDING"},
  {title:"CREDIT"},
  {title:"REPORTS"}
]

Page({
  data: {
    tabbarList:tabbarList,
    current:"SPENDING",
    guideTitle:{
      position: ['50%', '40%'],
        content: "All",
        style: {
          fontFamily: 'Helvetica',
          fontSize: 20,
          fill: 'black',
        }
    },
    guideMain:{
      position: ['50%', '55%'],
      content: "",
      style: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        fill: 'black',
      }
    },
    ringData:[],
    totalChart:0,
    detailStatus:false,
    buttonSeeAll:false,
    categoryChoose:"",
    rangeTime:7,
    thisDate:"20230817",
    totalBudget:0,
    barData:[],
    sortDataByValue:[],
    top5List :[],
    listForTabbar:["all","want","need","must"]
  },
  onLoad({stat}) {
    this.data.dataAllCategory = appData.dataAllCategory 
    this.data.allData = appData.allData
    this.data.allDataForList = appData.allDataForList 
    this.data.alldataPerDate = appData.alldataPerDate
    this.data.expenses = appData.expense
    const result = JSON.parse(stat)
    this.setData({current:result.current})
    this.setRingData(this.data.dataAllCategory)
    this.data.guideMain.content= formatRupiah(this.data.totalChart) 
    this.setTrend(this.data.alldataPerDate)
    this.sortExpance()
  },
  changeTabbar(title){
    this.setData({current:title})
  },
  setRingData(data){
  
    this.setData({ringData:data.data,totalChart:data.totalValue})
  },
  findDetailData(){
    const findData = this.data.expenses.data.filter(el=> el.category === this.data.categoryChoose)
    const findCategory = this.data.dataAllCategory.data.find(el => el.name === this.data.categoryChoose)
    const result = findData.map(el=>({
      ...el,
      total : el.value
    }))
    // console.log(">>>>>>>>>>>>",findCategory);
    const newGuideTitle = {
      position: ['50%', '40%'],
        content: findCategory.name,
        style: {
          fontFamily: 'Helvetica',
          fontSize: 20,
          fill: findCategory.color,
        }
      }
      const newGuideMain = {
        position: ['50%', '55%'],
        content: formatRupiah(findCategory.total) ,
        style: {
          fontFamily: 'Helvetica',
          fontSize: 15,
          fill: 'black',
        }
      }
    this.setData({buttonSeeAll:true,detailStatus:false,ringData:result,guideTitle:newGuideTitle,guideMain:newGuideMain,dataDetailCategory:findCategory})
  },
  setDetailCategory(e){
    if(e.selected ){
      this.setData({categoryChoose : e.data.name, detailStatus:e.selected})
    }else{
      this.setData({categoryChoose : "", detailStatus:e.selected})
    }
  },
  seeAllData(){
    const newGuideTitle = {
      position: ['50%', '40%'],
        content: "All",
        style: {
          fontFamily: 'Helvetica',
          fontSize: 20,
          fill: "black",
        }
      }
      const newGuideMain = {
        position: ['50%', '55%'],
        content: formatRupiah(this.data.totalChart),
        style: {
          fontFamily: 'Helvetica',
          fontSize: 15,
          fill: 'black',
        }
      }
    const allData = this.data.dataAllCategory.data
    this.setData({buttonSeeAll:false,ringData:allData,detailStatus:false,guideMain:newGuideMain,guideTitle:newGuideTitle})
  },
  setTrend(data){
    console.log();
    const budgetAccount = appData.listAccount
    let lastDate =(this.data.thisDate) - budgetAccount.length
    let resultSum = 0
    budgetAccount.forEach(el => {
      resultSum += el.value
    });
    this.setData({totalBudget:resultSum})

    let result = data.map(el=>({
      ...el,
      limit : resultSum-el.total,
      jenis:"main"
    }))
    
    for (let i = 0; i < 7 - budgetAccount.length; i++) {
      result.unshift({
        date:lastDate.toString(),
        tanggal: formatDateApp(lastDate.toString()),
        total:0,
        limit:resultSum,
        jenis:"main"
      })
      lastDate = lastDate - 1
    }
    this.setData({barData:result})
  },
  sortExpance(){
    const data = this.data.allData
    let result = data.sort((a, b) => b.intValue - a.intValue);
    const top5List = result.slice(0,5)
    this.setData({sortDataByValue:result,top5List:top5List})
  }
});
