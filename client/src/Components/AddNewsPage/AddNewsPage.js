import { format } from 'date-fns';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addNewNews } from '../../store/addNews/addNewsAction';

import './AddNewsPageStyle.scss'

const AddNewsPage = () => {

   const [valueTitle, setValueTitle] = useState('')
   const [valuePicture, setValuePicture] = useState('')
   const [valueText, setValueText] = useState('')

   const dispatch = useDispatch()
   const newsDate = format(new Date(), 'd MMM YYY k:mm ')
   const url = 'http://localhost:7777/addNews'

   function getValueTitle(e) {
      setValueTitle(e.target.value)
   }

   function getValuePicture(e) {
      setValuePicture(e.target.value)
   }

   function getValueText(e) {
      setValueText(e.target.value)
   }

   function clickAddNews(e) {
      e.preventDefault()
      if (valueTitle.length >= 3 && valuePicture.length >= 3 && valueText.length >= 5) {
         dispatch(addNewNews(valueTitle, valuePicture, valueText, newsDate, url))
         alert('Новину додано')
         setValueTitle('')
         setValuePicture('')
         setValueText('')
      } else {
         alert(`Заповніть поля:
         - поле заголовку та картинки не менше 3-х символів;
         - поле тексту не менше 5-ти символів ` )
      }
   }

   return (
      <section className='addnews'>
         <div className='addnews__container'>
            <div className='addnews__content'>
               <form className='addnews__form'>
                  <input
                     className='addnews__form-title'
                     type='text'
                     placeholder="Введіть заголовок новини"
                     value={valueTitle}
                     onChange={getValueTitle} />
                  <input
                     className='addnews__form-picture'
                     type='text'
                     placeholder="Вставте посилання на картинку новини"
                     value={valuePicture}
                     onChange={getValuePicture} />
                  <textarea
                     className='addnews__form-text'
                     type='text'
                     placeholder="Введіть текст новини"
                     value={valueText}
                     onChange={getValueText} />
                  <button
                     className='addnews__form-button'
                     onClick={clickAddNews} >
                     Додати новину
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddNewsPage;