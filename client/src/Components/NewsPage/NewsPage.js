import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getNewsCollections, removeNewsCollection, updateNewsCollection } from '../../store/addNews/addNewsAction';

import './NewsPageStyle.scss'

const NewsPage = () => {

   const [edit, setEdit] = useState(true)
   const [remove, setRemove] = useState(false)
   const [post, setPost] = useState('')
   const [newsTitle, setNewsTitle] = useState('')
   const [newsText, setNewsText] = useState('')
   const [newsPicture, setNewsPicture] = useState('')

   const selectorNews = useSelector((state) => state.addNewsReducer)
   const url = 'http://localhost:7777/news'
   const dispatch = useDispatch()
   const data = {
      newsTitle,
      newsText,
      newsPicture
   }

   function valueEdit(e, pos) {
      setPost(selectorNews[pos])
      setEdit(!edit)
   }

   useEffect((e) => {
      if (post) {
         setNewsTitle(post.newsTitle)
         setNewsText(post.newsText)
         setNewsPicture(post.newsPicture)
      } else {
         setNewsTitle('')
         setNewsText('')
         setNewsPicture('')
      }
   }, [post])

   function updateNews() {
      dispatch(updateNewsCollection(`http://localhost:7777/news/${post._id}`, data));
      valueEdit()
   }

   function removeNews(e, pos) {
      setRemove(!remove)
      dispatch(removeNewsCollection(`http://localhost:7777/news/${selectorNews[pos]._id}`));
      dispatch(getNewsCollections(url))
   }

   useEffect(() => {
      dispatch(getNewsCollections(url))
   }, [edit, remove])

   return (
      <section className='news'>
         <div className='news__container'>
            {
               edit ?
                  selectorNews.length > 0 ?
                     selectorNews.map((el, index = el._id) =>
                        <div className='news__content' key={index} >
                           <div className='news__content-container'>
                              <div className='news__content-title ' >
                                 {el.newsTitle}
                              </div>
                              <div className='news__content-date'>
                                 {el.newsDate}
                              </div>
                           </div>
                           <div className='news__content-container'>
                              <div className='news__content-text'>
                                 {el.newsText}
                              </div>
                              <div className='news__content-picture'>
                                 <img src={`${el.newsPicture}`} />
                              </div>
                           </div>
                           <div className='edit-icon'>
                              <i className="fa-solid fa-pen" onClick={(e) => valueEdit(e, index)}></i>
                              <i className="fa-solid fa-trash" onClick={(e) => removeNews(e, index)}></i>
                           </div>
                        </div>
                     )
                     :
                     <p className='not-news'>Нажаль новин не має ;)</p>
                  :
                  <div className='edit-news'>
                     <input
                        value={newsTitle || post.newsTitle && ''}
                        onChange={(e) => setNewsTitle(e.target.value)}
                        className='edit-news__title' />
                     <input
                        value={newsPicture || post.newsPicture && ''}
                        onChange={(e) => setNewsPicture(e.target.value)}
                        className='edit-news__picture' />
                     <textarea
                        value={newsText || post.newsText && ''}
                        onChange={(e) => setNewsText(e.target.value)}
                        className='edit-news__text'
                        rows={5} />
                     <div className='edit-news__controller'>
                        <button onClick={(e) => updateNews(e)} className='edit-news__btn'>
                           Зберегти зміни
                        </button>
                        <button onClick={valueEdit}> Назад </button>
                     </div>
                  </div>
            }
         </div>
      </section>
   );
};

export default NewsPage;