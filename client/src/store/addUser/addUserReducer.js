import { ADD_USER, GET_USER_API, } from "./addUserType";

const initialState = []

export const addUserReducer = (state = initialState, action) => {
   const { type, payload } = action;

   switch (type) {
      case ADD_USER: {
         const user = [...state, payload];
         return user
      }
      case GET_USER_API: {
         return payload;
      }
      default: {
         return state
      }
   }
}