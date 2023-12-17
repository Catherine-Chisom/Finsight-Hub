const express = require('express');
const { Article, Expense, User} = require('../models/models');
const router = express.Router();

// API endpoints

// Add new user
router.post('/users', async (req, res) => {
  const { username, maxSpendingLimit, savings } = req.body;

  try {
      // Create a new User instance
      const newUser = new User({
          username,
          maxSpendingLimit,
          savings,
      });

      // Save the new user to the database
      await newUser.save();

      res.status(201).json(newUser); // Return the newly created user
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Edit user by ID
router.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { username, maxSpendingLimit, savings } = req.body;

  try {
      // Find the user by ID
      const user = await User.findById(userId);

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Update user properties
      user.username = username;
      user.maxSpendingLimit = maxSpendingLimit;
      user.savings = savings;

      // Save the updated user to the database
      await user.save();

      res.status(200).json(user); // Return the updated user
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


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
  

// Add new expense
router.post('/expenses', async (req, res) => {
  const { category, amount, date, userId } = req.body;

  try {
    // Create a new Expense instance
    const newExpense = new Expense({
      category,
      amount,
      date,
      userId,
    });

    // Save the new expense to the database
    await newExpense.save();

    res.status(201).json(newExpense); // Return the newly created expense
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Edit expense
router.put('/expenses/:id', async (req, res) => {
  const { category, amount, date, userId } = req.body;
  const expenseId = req.params.id;

  try {
    // Find the expense by ID
    const existingExpense = await Expense.findById(expenseId);

    if (!existingExpense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    // Update the expense fields
    existingExpense.category = category;
    existingExpense.amount = amount;
    existingExpense.date = date;
    existingExpense.userId = userId;

    // Save the updated expense to the database
    await existingExpense.save();

    res.status(200).json(existingExpense); // Return the updated expense
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Adding other endpoints soon

    
module.exports = router;