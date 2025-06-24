const express = require('express');
const bodyParser = require('body-parser');
const { logger } = require('./middleware/logger');
const productRoutes = require('./routes/products');
const { errorHandler } = require('./utils/errorHandlers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(logger);

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/products', productRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app; 