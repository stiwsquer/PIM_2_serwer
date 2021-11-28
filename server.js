require('dotenv').config();
const { app } = require('./loaders/loaders');
const { connect } = require('./database/connect');
const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`Listening at localhost:${PORT}`);
  await connect();
});

require('./controller/beerController');
