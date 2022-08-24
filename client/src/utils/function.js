export function validName(e) {
   const userName = document.querySelector('.adduser__form-name');

   const value = e.target.value;

   if (value.length < 3) {
      userName.style.borderColor = 'red';
      userName.style.boxShadow = '0px 0px 5px 3px red'
   } else {
      userName.style.borderColor = 'green';
      userName.style.boxShadow = '0px 0px 5px 3px #82ff82';
   }
   if (value == '') {
      userName.style.borderColor = '#ccc';
      userName.style.boxShadow = 'none';
   }
}

export function validNick(e) {
   const userNick = document.querySelector('.adduser__form-nick');

   const value = e.target.value;

   if (value.length < 3 || !value.includes('@')) {
      userNick.style.borderColor = 'red';
      userNick.style.boxShadow = '0px 0px 5px 3px red';
   } else {
      userNick.style.borderColor = 'green';
      userNick.style.boxShadow = '0px 0px 5px 3px #82ff82';
   }
   if (value == '') {
      userNick.style.borderColor = '#ccc';
      userNick.style.boxShadow = 'none';
   }
}

export function validAvatar(e) {
   const userAvatar = document.querySelector('.adduser__form-avatar');

   const value = e.target.value

   if (value.length < 5) {
      userAvatar.style.borderColor = 'red';
      userAvatar.style.boxShadow = '0px 0px 5px 3px red';
   } else {
      userAvatar.style.borderColor = 'green';
      userAvatar.style.boxShadow = '0px 0px 5px 3px #82ff82';
   }
   if (value == '') {
      userAvatar.style.borderColor = '#ccc';
      userAvatar.style.boxShadow = 'none';
   }
}