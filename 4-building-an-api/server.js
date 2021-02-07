const express = require('express');

const app = express();
const PORT = 4000;

// connect to DB

app.get('/test', (req, res)=>{


    res.json({hello: "12312"});
});



app.put('/test', (req, res)=>{

    // sql squery 

    // the logic through which you can store tjhe data
    res.json({hello: "this is a put method"});

});




app.listen(PORT, ()=>{
    console.log("server stareted on port 4000");
})