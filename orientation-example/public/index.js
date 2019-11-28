let button = document.getElementById('xmlh');
let response = document.getElementById('response');
let urlValue = document.getElementById('url');

button.addEventListener('click', function() {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:8080/api/links');
    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        console.log(urlValue.value);

    };

    ourRequest.send();

});

function renderHTML(data) {
    let response = '';


}