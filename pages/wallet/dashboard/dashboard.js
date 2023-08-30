import {formatRupiah,formatDateApp} from "../../../util"

const appData = getApp().globalData

Page({
  data: {
    totalChart:0,
    percentWPrevData:0,
    tabbarItem:["ACCOUNTS", "BUDGET & GOALS"],
    activeTab:"ACCOUNTS",
    listAcount:[],
    ringData:[],
    dataAllCategory:[],
    dataDetailCategory:[],
    detailStatus:false,
    buttonSeeAll:false,
    categoryChoose:"",
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
    allData:[],
    allDataForList:[],
    alldataPerDate:[],
  },
  onLoad() {
    const data = getApp().globalData.expenses
    const listAccount = getApp().globalData.listAccount
    this.setData({listAcount:listAccount})
    this.findAllParentData(data)
    this.joinAllData(data)
  },
  switchTabbar(e){
    this.setData({activeTab:e.target.dataset.name})
  },
  findAllParentData(data){
    const date = "20230817"
    const index = data.findIndex(el=>el.date === date)
    const newData = [];
    const categoryTotals = {};
    let totalAllCategories = 0;
    data[index].data.forEach((item) => {
      if (categoryTotals[item.category]) {
        categoryTotals[item.category] += item.value;
      } else {
        categoryTotals[item.category] = item.value;
      }
      totalAllCategories += item.value;
    });

    for (const category in categoryTotals) {
      newData.push({ name: category, total: categoryTotals[category] });
    }
    newData.forEach(el=>{
      const match = getApp().globalData.categoryList.find(item=> item.name === el.name)
      if (match){
        el.color = match.color
      }
    })
    const result = {
      date:data[index].date,
      totalValue:totalAllCategories,
      data:newData
    }
    this.setData({dataAllCategory:result,totalChart:totalAllCategories, ringData:result.data, expenses:data[index]})
    this.data.guideMain.content= formatRupiah(this.data.totalChart) 
    appData.dataAllCategory = this.data.dataAllCategory
    appData.expense = this.data.expenses
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
        content: formatRupiah(this.data.totalChart) ,
        style: {
          fontFamily: 'Helvetica',
          fontSize: 15,
          fill: 'black',
        }
      }
    const allData = this.data.dataAllCategory.data
    this.setData({buttonSeeAll:false,ringData:allData,detailStatus:false,guideMain:newGuideMain,guideTitle:newGuideTitle})
  },
  joinAllData(data){
    const result = []
    for (const expense of data) {
      const date = expense.date;
      for (const item of expense.data) {
        result.push({ ...item,
          value:formatRupiah(item.value),
          tanggal:formatDateApp(date),
          intValue: item.value,
          date });
      }
    }
    result.sort((a, b) => b.date.localeCompare(a.date));
    const listResult = result.slice(0,5)
    // buat pertanggal 
    const hasil = [];

    for (const expense of data) {
      const date = expense.date;
      const data = expense.data;

      let totalPerDate = 0;

      for (const item of data) {
        totalPerDate += item.value;
      }

      hasil.push({ date,tanggal:formatDateApp(date), total: totalPerDate });
    }
    const prevDate = "20230816"
    const dataPrevDate = hasil.find(el => el.date === prevDate)
    const total = this.data.totalChart
    const prevTotal = dataPrevDate.total
    const persentase = Math.round((total-prevTotal)/prevTotal*100)

    this.setData({allData:result,allDataForList:listResult,alldataPerDate:hasil, percentWPrevData:persentase})
    appData.allData= this.data.allData
    appData.allDataForList = this.data.allDataForList
    appData.alldataPerDate = this.data.alldataPerDate
  },
  pindahPage(e){
    const stat ={
      current:e.target.dataset.current,
    }
  
    if(stat.current){
      my.navigateTo({
        url:"/pages/wallet/statistic/statistic?stat="+JSON.stringify(stat)
      })
    }else{
      my.navigateTo({
        url:"/pages/wallet/record/record"
      })
    }
  }
});
