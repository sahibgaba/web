const express = require('express');
const path = require('path');

const app = express();

const port = 5656;

app.use(express.static(path.join(__dirname, './static')));

app.use('/instagram', express.static('instagram'));
app.listen(port, () => console.log(`Your server has started on port '${port}!`));
