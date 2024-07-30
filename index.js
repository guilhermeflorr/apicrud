const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/products', routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
