// const form = document.getElementById('entry-form');

// const url = "http://localhost:5000/home/insert"

// form.addEventListener('submit', e=>{
//   e.preventDefault();
//   checkPlate(); 
// });

// async function checkPlate(){
//     const plateNumber = document.getElementById('plate-number').value;
//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
//     const phoneNumber = document.getElementById('phone-number').value;



//     let url = 'http://localhost:5000/home/check?plateNumber=' + plateNumber;
//     let data = await fetch(url);
//     const parsedData = await data.json();
//     if(parsedData.foundInDatabase == 'Yes'){
//         alert('Found in the database');
//     }else{
//         alert('You have entered wrong car');
//     }
// }


