const form = document.getElementById('search-form');

form.addEventListener('submit', e=>{
  e.preventDefault();
  searchPlate(); 
});

async function searchPlate(){
    const query = document.getElementById('query').value;
    const type = document.getElementById('type').value;
    const table = document.getElementById('table');
    console.log(query);
    console.log(type);

    let url = 'http://localhost:5000/parking/api/home/search?query='+query+'&type='+type;
    let data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData[0]);

    let len = table.rows.length;
    console.log(len);
    for(let i = len-1; i>=0; i--){
        table.deleteRow(i);
    }

    parsedData.forEach(function(data, index){
        let row = table.insertRow();
        let firstName = row.insertCell(0);
        firstName.innerHTML = data.firstName;
        let lastName = row.insertCell(1);
        lastName.innerHTML = data.lastName;
        let vehicleNumber = row.insertCell(2);
        vehicleNumber.innerHTML = data.plateNumber;
        let phoneNumber = row.insertCell(3);
        phoneNumber.innerHTML = data.phoneNumber;
        let timeCreated = row.insertCell(4);
        timeCreated.innerHTML = data.time;
    });
}
