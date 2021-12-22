import GoodsManager from "./home.js"

export default class SpuDetailManager{
  constructor(tableName){
    this.goodsManager = new GoodsManager
    (tableName)
  }

  async searchBySpu(spuCode){
    try{
      const res = await this.goodsManager.searchBySpu({spuCode})
      
      if(res.data){
        return res.data
      }
      return null
    }catch(e){
      console.error(e)
      return null
    }
  }
}