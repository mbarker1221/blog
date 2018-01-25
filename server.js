const express = require('express');
const morgan = require('morgan');
const app = express();


const BlogPostsRouter = require('./router.js');
const router = express.Router();

app.use(morgan('common'));


app.use('/blog-posts', router);

const {
    BlogPosts
} = require('./models.js');


app.listen(process.env.PORT || 8080, () = > {
    console.log(`Your app is listening on port $ {
        process.env.PORT || 8080
    }`);
});