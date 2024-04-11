const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
// const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'mongodb+srv://nodemaderpader:wertyaaq101@nodemaderpader.29zpowc.mongodb.net/node-maderpader?retryWrites=true&w=majority&appName=nodemaderpader'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// for different folder name use the script below
// app.set('views', 'myviews');

// dev middleware & static files 
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})) // get browser data
app.use(morgan('dev'));


//         METHOD | RESPONSE
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

// blog Routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})

