console.log('1');
const xhr = new XMLHttpRequest();
xhr.open('GET', '/');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send();

// xhr.addEventListener('load', (e) => {
//     console.log(xhr.response);
//     let data = JSON.parse(xhr.response);
//     console.log(data);
//     let root = document.querySelector('.root');
//     console.log(data.users.length);
//     for (let i = 0; i < data.users.length; i++) {

//     }
// });