import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../../store/addUser/addUserAction';
import { validAvatar, validName, validNick } from '../../utils/function';

import './AddUserPageStyle.scss';

const AddUserPage = () => {

   const [valueName, setValueName] = useState('Batman')
   const [valueNick, setValueNick] = useState('@Batman')
   const [valueAvatar, setValueAvatar] = useState('https://i.ytimg.com/vi/7Zxb3YjkLiA/maxresdefault.jpg')

   const dispatch = useDispatch()
   const apiUrl = 'htttp://roman160893.github.io/yournews/:7777/addUser'

   function getValueName(e) {
      setValueName(e.target.value)
      validName(e)
   }

   function getValueNick(e) {
      setValueNick(e.target.value)
      validNick(e)
   }

   function getValueAvatar(e) {
      setValueAvatar(e.target.value)
      validAvatar(e)
   }

   function clickAddUser(e) {
      e.preventDefault()
      if (valueName.length >= 3 && valueNick.length >= 3 && valueAvatar.length >= 5 && valueNick.includes('@')) {
         dispatch(addNewUser(valueName, valueNick, valueAvatar, apiUrl))
         alert('Вітаємо, користувача додано!')
      } else {
         alert('Заповніть всі поля');
      }
   }

   return (
      <section className='adduser'>
         <div className='adduser__container'>
            <div className='adduser__content'>
               <form className='adduser__form'>
                  <input
                     className='adduser__form-name'
                     type='text'
                     placeholder="Введіть ваше ім'я (Roman)"
                     value={valueName}
                     onChange={getValueName} />
                  <input
                     className='adduser__form-nick'
                     type='text'
                     placeholder="Введіть ваш nickName (@Roman)"
                     value={valueNick}
                     onChange={getValueNick} />
                  <input
                     className='adduser__form-avatar'
                     type='text'
                     placeholder="Вставте посилання на avatar (http//yourAvatar)"
                     value={valueAvatar}
                     onChange={getValueAvatar} />
                  <button
                     className='adduser__form-button'
                     onClick={clickAddUser}>
                     Додати користувача
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddUserPage;