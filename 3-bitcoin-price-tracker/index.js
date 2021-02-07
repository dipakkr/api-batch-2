
const priceText = document.getElementById('price'); // get the reference of text element
const btn = document.getElementById('fetch'); // check price button reference


const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'; // define the URL

const request = new XMLHttpRequest();


function callAPIUsingXMLHTTP(){

    request.open('GET', URL);

    request.onload = function () {

        const response = request.response;
        
        const parsedData = JSON.parse(response);

        const bitcoin = parsedData.bpi.USD.rate

        priceText.innerText = bitcoin;

    }
    request.send();
}



callAPIUsingXMLHTTP();


/**
 * fetch cal
 * res=>res.json()
 * This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method
 * 
 * res => console.log(res)
 */

function callAPIUsingFetch(){
    fetch(URL).then(res=> res.json()).then(parsedData=>{
        const value = parsedData.bpi.USD.rate_float;
        priceText.innerText = value;
    })
}

// callAPIUsingFetch();