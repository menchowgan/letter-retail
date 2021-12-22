const db = wx.cloud.database()

/**
 * author menchowgan
 * 2021.3
 * wx-cloud-db封装
 */
class DBManager{
  constructor(collectionName){
    this.collection = db.collection(collectionName)
  }

  //数据上传
  upload(obj){
    return this.collection.add({
      data: {
        ...obj
      }
    })
  }

  //查询数据
  query(obj, skip, limit){

    if(!skip){
      skip = 0
    }
    if(!limit){
      limit = 20
    }

    return this.collection.where(obj)
    .skip(skip)
    .limit(limit)
    .get()
  }

  //删除数据
  deleteBy(id){
    return this.collection.doc(id).remove()
  }

  //数据更新
  updateBy(id, obj){
    return this.collection.doc(id).update({
      data: {
        ...obj
      }}
    )
  }
}

export default DBManager