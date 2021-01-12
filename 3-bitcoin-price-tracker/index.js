
// get the reference of text element
const priceText = document.getElementById('price');

// check price button reference
const btn = document.getElementById('fetch');

// define the URL
const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';


const request = new XMLHttpRequest();


btn.addEventListener('click',  function(){

    console.log(' calling coindesk API ');


    
})


setInterval(()=>{

    // fetch the current price

    console.log(' calling coindesk API ');

    request.open('GET', URL);

    request.onload = function () {


        const response = request.response;


        // parsed the data 
        const parsedData = JSON.parse(response);

        const value = parsedData.bpi.USD.rate_float;

        priceText.innerText = value;
    }

    request.send();

}, 10000) ;