const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

const todosRoutes = require('./routes/todosRoute');

app.use('/', todosRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})