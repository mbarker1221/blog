const express = require('express');
const morgan = require('morgan');

const app = express();

//const postRouter = require('./postRouter');
//const eraseRouter = require('./eraseRouter');
const blogPosts = require('./models.js');
console.log(blogPosts);
//blogPosts.init();

app.use(morgan('common'));

app.use(express.static('public'));

//  res.sendFile(__dirname + '/index.html');
//});

//app.use('/blog-posts/:id', eraseRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
