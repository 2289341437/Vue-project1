import {post,get,post_array} from '../http'
export default {
  namespaced:true,
  state:{
    name:"category",
    list:[],
    message:"",
    loading:false
  },
  getters:{

  },
  mutations:{
    // 重置list
    resetList(state,list){
      state.list = list;
    },
    // 重置msg
    resetMsg(state,msg){
      state.message = msg;
    },
    // 重置loading
    resetLoaing(state,loading){
      state.loading = loading;
    }
  },
  actions:{
    batchDelete({dispatch,commit},ids){
      return post_array("/manager/category/batchDeleteCategory",{ids})
      .then((result)=>{
        commit("resetMsg",result.statusText)
        dispatch("findAll")
      })
    },
    findAll(context){
      context.commit("resetLoaing",true)
      get("/manager/category/findAllCategory")
      .then((result)=>{
        // 将查询到的数据通过mutations设置到state中
        context.commit("resetList",result.data);
      })
      .finally(()=>{
        context.commit("resetLoaing",false)
      });
    }
  }
}