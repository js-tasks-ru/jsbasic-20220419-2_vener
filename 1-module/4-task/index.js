function checkSpam(str) {
  let spam = str.toLowerCase();
  if ( spam.includes("1xbet" ) || str.includes("xxx") ) {
    return true;
   } else {
     return false;
   }
  }