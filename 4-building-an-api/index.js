

// require express
const express = require('express');


// intitiate app
const app = express();

// port name
const PORT = 4004;


// define endpoints

app.get('/my-endpoint', (req, res)=>{
    res.send({
        "time": {
          "updated": "Jan 10, 2021 11:22:00 UTC",
          "updatedISO": "2021-01-10T11:22:00+00:00",
          "updateduk": "Jan 10, 2021 at 11:22 GMT"
        },
        "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
        "chartName": "Bitcoin",
        "bpi": {
          "USD": {
            "code": "USD",
            "symbol": "&#36;",
            "rate": "39,588.8557",
            "description": "United States Dollar",
            "rate_float": 39588.8557
          },
          "GBP": {
            "code": "GBP",
            "symbol": "&pound;",
            "rate": "29,183.4792",
            "description": "British Pound Sterling",
            "rate_float": 29183.4792
          },
          "EUR": {
            "code": "EUR",
            "symbol": "&euro;",
            "rate": "32,383.5256",
            "description": "Euro",
            "rate_float": 32383.5256
          }
        }
      });
});


app.get('/', (req, res)=>{
    res.send('hello')
})


app.post('/my-endpoint', (req, res)=>{
    res.send('hello')
})


// start the app on PORT
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

