const form = document.getElementById('login-form');

form.addEventListener('submit', e=>{
  e.preventDefault();
  validate(); 
});

async function validate(){
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  let url = 'http://localhost:5000/parking/api/login?username='+username.value+'&password='+password.value;
  let data = await fetch(url);
  const parsedData = await data.json();
  console.log(parsedData)
  if(parsedData.foundUser == 'Yes'){
    redirect();
  }else if(parsedData.foundUser == 'Wrong Password'){
    alert('You have entered wrong password');
  }else{
    alert('User dont have access inside database');
  }
}

function redirect(){
  window.open('index.html', '_self');
}


