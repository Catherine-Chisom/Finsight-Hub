const express = require('express');
const { Article } = require('../models/models');
const router = express.Router();

// API endpoints

// Add new article
router.post('/articles', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      // Create a new Article instance
      const newArticle = new Article({
        title,
        content,
      });
  
      // Save the new article to the database
      await newArticle.save();
  
      res.status(201).json(newArticle); // Return the newly created article
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Get articles
router.get('/articles', async (req, res) => {
    try {
      const articles = await Article.find();
      res.status(200).json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });    
  
  // Adding other end points soon
    
module.exports = router;
