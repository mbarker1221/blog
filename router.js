const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {
    BlogPosts
} = require('./models');
const {
    BlogPosts
} = require('./models.js');

BlogPosts.create('My Trip', 'This summer I travelled to Europe...');
BlogPosts.create('My Blog', 'That is where i started this blog...');

router.get('/', (req, res) = > {
    res.json(BlogPosts.get());
});

router.post('/', jsonParser, (req, res) = > {

    const requiredFields = ['title', 'content', 'author', 'publishDate'];

    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing\` $ {
                field
            }\` in request body`
            return res.status(400).send(message);
        }
    }

    const post = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
    res.status(201).json(post)
});


router.put('/:id', jsonParser, (req, res) = > {
        const requiredFields = ['title', 'content', 'author', 'publishDate'];
        for (let i = 0; i < requiredFields.length; i++) {
            const field = requiredFields[i];
            if (!(field in req.body)) {
                const message = `Missing\` {
                    $field
                }\` in request body`
                return res.status(400).send(message);
            }
        }
        if (req.params.id !== req.body.id) {
            const message = `Request path id($ {
                req.params.id
            }) and request body id($ {
                    req.body.id
                }
            }) must match`;
        return res.status(400).send(message);
    }

    const newItem = BlogPosts.update({
        id: req.params.id,
        title: req.params.title,
        content: req.body.content,
        author: req.body.author,
        publishDate: req.body.publishDate
    });

    res.status(204).end();
});

router.delete('/:id', (req, res) = > {
    BlogPosts.delete(req.params.id);
    res.status(204).end();
});

module.exports = router;