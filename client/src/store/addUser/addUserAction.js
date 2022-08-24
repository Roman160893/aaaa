import axios from "axios"
import { ADD_USER, GET_USER_API } from "./addUserType"

export const addNewUser = (userName, userNickName, userAvatar, url) => {
   return {
      type: ADD_USER,
      payload: {
         userName,
         userNickName,
         userAvatar,
         postApi: axios.post(url, {
            userName,
            userNickName,
            userAvatar
         })
      },
   }
}


const getUsers = users => {
   return {
      type: GET_USER_API,
      payload: users,
   }
}

export const getToUsersCollections = url => dispatch => axios.get(url).then(({ data }) => dispatch(getUsers(data)))