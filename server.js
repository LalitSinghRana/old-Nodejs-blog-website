const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express();

// mongoose.connect('mongodb://localhost:5000/blog');
// 								mongodmongodb://localhost:27017/{DATABASE_NAME}
app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
	const articles = [
		{
			title: 'Test Article 3',
			createdAt: new Date(),
			description: 'lorum ipsum',
		},
		{
			title: 'Test Article 2',
			createdAt: new Date(),
			description: 'lorum ipsum 2',
		},
	];
	res.render('articles/index', { articles: articles });
});

app.listen(5000);
