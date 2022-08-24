import axios from "axios"
import { ADD_NEWS, GET_NEWS, REMOVE_NEWS, UPDATE_NEWS } from "./addNewsType"

//===========================================//
export const addNewNews = (newsTitle, newsPicture, newsText, newsDate, url) => {
   return {
      type: ADD_NEWS,
      payload: {
         newsTitle,
         newsPicture,
         newsText,
         postNews: axios.post(url, {
            newsTitle,
            newsPicture,
            newsText,
            newsDate
         })
      }
   }
}

//===========================================//
const getNews = (news) => {
   return {
      type: GET_NEWS,
      payload: news,
   }
}

export const getNewsCollections = url => dispatch => axios.get(url).then(({ data }) => dispatch(getNews(data)));

//===========================================//
const updateNews = (news) => {
   return {
      type: UPDATE_NEWS,
      payload: news
   }
}

export const updateNewsCollection = (url, data) => {
   return (dispatch) => {
      axios.put(url, data).then(({ data }) => dispatch(updateNews(data)))
   }
}
//===========================================//
const removeNews = (news) => {
   return {
      type: REMOVE_NEWS,
      payload: news
   }
}

export const removeNewsCollection = (url) => {
   return (dispatch) => {
      axios.delete(url).then(({ data }) => dispatch(removeNews(data)))
   }
}