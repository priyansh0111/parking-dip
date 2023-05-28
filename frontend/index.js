const form = document.getElementById('check-plate-form');

const url = "http://localhost:5000/home/check"

form.addEventListener('submit', e=>{
  e.preventDefault();
  checkPlate(); 
});

async function checkPlate(){
    const plateNumber = document.getElementById('plate-number').value;
    let url = 'http://localhost:5000/parking/api/home/check?plateNumber=' + plateNumber;
    let data = await fetch(url);
    const parsedData = await data.json();
    if(parsedData.foundInDatabase == 'Yes'){
        alert('Found in the database');
    }else{
        alert('You have entered wrong car');
    }
}


