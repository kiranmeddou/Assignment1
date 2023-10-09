const express = require('express');
const router = express.Router();
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


router.post('/create', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newRecord = await knex('users').insert({ name, description });
e
    res.json(newRecord);
  } catch (error) {
   
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/retrieve', async (req, res) => {
  try {
    
    const searchCriteria = req.query.criteria;

    const results = await knex('users').where('', 'like', `%${searchCriteria}%`);

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    
    const id = req.params.id;
    const { name, description } = req.body;

    await knex('users').where({ id }).update({ name, description });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    
    const id = req.params.id;

    await knex('users').where({ id }).del();

    res.json({ success: true });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/api', router);
