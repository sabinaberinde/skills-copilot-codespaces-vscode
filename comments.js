// Create web server
// 1. install express
// 2. import express
// 3. create app
// 4. create router
// 5. create route
// 6. listen to port

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// 4. create router
const comments = require('./routes/comments');

// 5. create route
app.use('/api/comments', comments);

// 6. listen to port
app.listen(port, () => console.log(`Listening on port ${port}`));

// 7. create static route
app.use(express.static(path.join(__dirname, 'public')));