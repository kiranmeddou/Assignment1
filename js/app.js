const express = require('express');
const app = express();
const port = 3000; 


app.use(express.static('public')); 


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.htm');
});


app.get('/api/data/:id', (req, res) => {
  const id = req.params.id; 

 
  const jsonResponse = generateResponse(id);

  res.json(jsonResponse);
});


module.exports = app;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


function generateResponse(id) {
 
  return {
    message: `You clicked on button ${id}`,
  };
}
