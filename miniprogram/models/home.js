import DBManager from "../utils/db";

class GoodsManager{
  constructor(collectionName){
    this.dbManager = new DBManager(collectionName)
  }

  get(condition, skip, limit){
    return this.dbManager.query(condition, skip, limit)
  }

  searchBySpu(condition){
    return this.dbManager.query(condition)
  }
}

export default GoodsManager