import GoodsManager from "../../models/home.js";
import {
  tableName
} from "../../config/environment";
import {
  category
}from "../../utils/dd.js"

const db = wx.cloud.database()
const _ = db.command

Page({
  data: {
    activeKey: 0,
    condition: "",
    imageURL: "",
    spuList: []
  },

  onLoad(){
    this._search(category[this.data.activeKey])
  },

  _search(name){
    this.setData({
      spuList: []
    })

    this._getMarchondiseInfo({
      name
    })
  },

  async _getMarchondiseInfo(condition, skip, limit){
    let spuManager = new GoodsManager(tableName.spu)
    try{
      const result = await spuManager.get(condition, skip, limit)
      
      let itemList = []
      if(result.data.length !== 0){
        for(let idx in result.data){
          let item = result.data[idx]
          itemList.push(item)
        }
      }

      this.setData({
        spuList: itemList
      })
    }catch(e){
      console.error(e)
    }
  },

  onChange(event){
    this._search(category[event.detail])
  },
  onSearch(){

  },
  conCancel(){

  }
  
});
