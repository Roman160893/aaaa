import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getToUsersCollections } from '../../store/addUser/addUserAction';
import './HeaderStyle.scss'

const Header = () => {

   const dispatch = useDispatch()
   const urlUsers = '"htttp://roman160893.github.io/yournews/server/users'

   function clickUser() {
      dispatch(getToUsersCollections(urlUsers))
   }

   return (
      <header className='header'>
         <div className='header__container'>
            <div className='header__block'>
               <div className='header__logo'>
                  Your <br /> news
               </div>
               <nav className='header__nav'>
                  <ul>
                     <li><NavLink to='/yournews'>Головна</NavLink></li>
                     <li><NavLink to='/users' onClick={clickUser}>Користувачі</NavLink></li>
                     <li><NavLink to='/addUser'>Додати користувача</NavLink></li>
                     <li><NavLink to='/news'>Новини</NavLink></li>
                     <li><NavLink to='/addNews'>Додати новину</NavLink></li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
};

export default Header;