import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  itemList: [],
  list : [],
  token : "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NjAxMDI2MjZ9.mxNjoBd_fmCPO6bRhQY93ukh3oeHNJNdzYKFnCJzaTg"
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    init : function(state,actions){
      state.itemList = actions.payload;
    },
    addList : function(state,actions){
      state.list = actions.payload;
  },
  addTask : function(state,actions){
    state.list.push(actions.payload)
  },
  remove : function(state,actions){
    state.list.splice(actions.payload,1);
  }
}})

// Action creators are generated for each case reducer function
export const { init,addList ,addTask,remove} = itemSlice.actions

export default itemSlice.reducer