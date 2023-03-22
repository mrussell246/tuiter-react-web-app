import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
        const index = state
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.splice(index, 1);
      },   
    likeTuit(state, action) {
        const index = state
           .findIndex(tuit =>
              tuit._id === action.payload.id);
        const newArray = [...state]
        const tuit = newArray[index];
        if (action.payload.liked) {
            newArray[index] = {...tuit, liked: true, likes: tuit.likes + 1}
        } else {
            newArray[index] = {...tuit, liked: false, likes: tuit.likes - 1}
        }

        return newArray;
    }
  }
 
});

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;