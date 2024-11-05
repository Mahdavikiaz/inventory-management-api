const express = require('express');
const connectDB = require('./config/database.js');
const categoryRoutes = require('./routes/categoryRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const stockRoutes = require('./routes/stockRoutes.js');
const authRoutes = require('./routes/auth.js');
const logger = require('./logger.js');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Load the swagger.yaml file
const swaggerDocument = yaml.load(
  fs.readFileSync(path.join(__dirname, 'swagger.yaml'), 'utf8')
);

connectDB();

app.use(bodyParser.json());

// logging middleware
app.use(
  morgan('combined', {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);

// error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(err.status || 500).json({ error: err.message });
});

app.use('/api/auth', authRoutes);

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/stocks', stockRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
