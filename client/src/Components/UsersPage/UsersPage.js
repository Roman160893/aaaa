import React from 'react';
import { useSelector } from 'react-redux';

import './UsersPageStyle.scss'

const UsersPage = () => {

   const users = useSelector((state) => state.addUserReducer);

   return (
      <section className='users'>
         <div className='users__container'>
            {
               users.map((el, index) =>
                  <div className='users__card' key={index}>
                     <div className='users__card-avatar'>
                        <img src={`${el.userAvatar}`} />
                     </div>
                     <div className='users__card-nick'>
                        Nick-name:
                        <span className='users-nick'>{el.userNickName}</span>
                     </div>
                  </div>
               )
            }
         </div>
      </section>
   );
};

export default UsersPage;