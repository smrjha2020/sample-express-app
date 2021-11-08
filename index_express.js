var express = require("express");
var app = express(); //The second line initialized express using the brackets
// which initializes an express server and puts the initialized server into the variable app


app.listen(3000, () => {
 console.log("Server running on port 3000");
});

call_erpnext(){
let erpUrl = 'https://purnatalabs.erpnext.com/api/resource/Employee' ;
let response = fetch(erpUrl,   {
  
  headers {
    Authorization = 'e023bdd8b91c2b9:73e670bbdfec1ef' 
    Access-Control-Allow-Origin = '*'
  
  }
});

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  alert( "ok")
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
} 

}

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })
/*

const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
 
app.get('/', (req, res) => {
  res.end('Hello World!');
});

/* app.get("https://purnatalabs.erpnext.com/api/resource/Employee", (req, res) => {
    fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
        res.end(data);
    });
}); 

let erpUrl = 'https://purnatalabs.erpnext.com/api/resource/Employee' ;

let response = fetch(erpUrl,   {  
  
  headers {
    Authorization, 'e023bdd8b91c2b9:73e670bbdfec1ef' 
    Access-Control-Allow-Origin, '*'
    //secret and token received for user from purnatalabs.erpnext.com admin , now being passed
    // in header for authorization
    // CORS error localhost not given access
  }
});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  }); */