const API_URL = 'http://localhost:3003/api';

const MQTT_URL = 'http://localhost:5001/send-command';

$('#navbar').load('navbar.html');

// const devices = JSON.parse(localStorage.getItem('devices')) || [];
// const response = $.get('http://localhost:3001/devices');
// console.log(response);

$.get(`${API_URL}/devices`)
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(`Error: ${error}`);
});

// this will be used to get data from the local storage which has the name 'devices'.



// devices.forEach(function(device) {
//     const table = document.querySelector('#devices');
//     const row = document.createElement('tr');
  
//     const user = document.createElement('td');
//     const userText = document.createTextNode(device.user);
//     user.appendChild(userText);
  
//     const name = document.createElement('td');
//     const nameText = document.createTextNode(device.name);
//     name.appendChild(nameText);
  
//     row.appendChild(user);
//     row.appendChild(name);
  
//     table.appendChild(row);
//   });


// These lines of code are used to enter elements of the devices array to the html site

// devices.forEach(function(device) {
//     $('#devices tbody').append(`
//       <tr>
//         <td>${device.user}</td>
//         <td>${device.name}</td>
//       </tr>`
//     );
//   });

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post(`${API_URL}/devices`, body)
  .then(response => {
    location.href = '/';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

$.get(`${API_URL}/devices`)
.then(response => {
  response.forEach(device => {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});

// These lines of code will work on responding on clicking the Save button present on the html site, and after clicking the data added will be pushed into the array.


$('#add-device').on('click', function() {
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name });
    localStorage.setItem('devices', JSON.stringify(devices));
    // console.log(devices);
    location.href = '/';
  });
// the location.href will do nothing but open the device-list.html in the browser once you click the Save button.
// the localStorage.setItem will create an array with the name 'devices' and also convert the devices into string version of the array.
  $('#send-command').on('click', function() {
    const deviceId = $('#deviceId').val();
    const command = $('#command').val();
    $.post(MQTT_URL, { deviceId, command })
    .then(response => {
    location.href = '/';
        })
        });

// This will read the value of deviceId from the input field and make a POST request to the mqtt API.



