function initLogin() {
  const path = window.location.pathname;
console.log(path);
  if(path !== 'login') {
     return;
  }

  alert('Login');
}

initLogin();
