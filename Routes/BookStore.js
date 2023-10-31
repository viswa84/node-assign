const express = require('express');
const router = express.Router();
const Book = require('../Schema/BookStore.js');

// Create a new book
router.post('/', async (req, res) => {
  const { title, author, summary } = req.body;

  const newBook = new Book({
    title,
    author,
    summary,
  });

  console.log(newBook,'newbook')

  newBook.save()
    .then((book) => {
      res.status(201).json(book);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create a new book' });
    });
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Looking specific is Book not found Database' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Looking specific is Book not found Database' });

  }
});

// Update a book by ID
router.put('/:id', async (req, res) => {
  try {
    const bookId = req.params.id;
    const { title, author, summary } = req.body;
    const book = await Book.findByIdAndUpdate(bookId,{ title, author, summary }, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: `Book deleted Sucessfully ${req.params.id}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
