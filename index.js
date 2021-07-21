//import express
const express = require("express");
const path = require('path')

//instantiate express as app
const app = express();

//create a route for / home route
//get
// app.get("/", (req, res) => {
//   res.send("This is our route");
// });

//setting static files
app.use(express.static(path.join(__dirname, 'public')))


// //send a file
// app.get('/about', (req , res)=>{
// res.sendFile(path.join(__dirname, 'public', ('index.html')))
// })

//setting the server port
app.listen(9000, () => {
  console.log("Server is booming at port 9000");
});
