import React from 'react';
import './HomePageStyle.scss'

const HomePage = () => {
   return (
      <section className='home'>
         <div className='home__container'>
            <div className='home__content'>
               <div className='home__logo'>
                  Your <br />  news...
               </div>
               <div className='home__text'>
                  ...проведи <br /> час з користю
               </div>
            </div>
         </div>
      </section>
   );
};

export default HomePage;