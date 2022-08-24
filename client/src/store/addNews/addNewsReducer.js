import { ADD_NEWS, GET_NEWS, REMOVE_NEWS, UPDATE_NEWS } from "./addNewsType";

const initialStateNews = [];

export const addNewsReducer = (state = initialStateNews, action) => {
   const { type, payload } = action;

   switch (type) {
      case ADD_NEWS: {
         const news = [...state, payload];
         return news
      }
      case GET_NEWS: {
         return payload
      }
      case UPDATE_NEWS: {
         return state
      }
      case REMOVE_NEWS: {
         return state
      }
      default: {
         return state
      }
   }
}