const express = require('express'); //
const blogController = require('../controller/blogController');
const router = express.Router(); // router tag

// blog routes
router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create_get);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

// Catch-all route for handling undefined routes
router.use((req, res, next) => {
    res.status(404).render('404', { title: '404 - Not Found' });
});

module.exports = router;