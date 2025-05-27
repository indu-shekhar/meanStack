const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// GET /person - List all people
router.get('/', async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /person - Create a new person
router.post('/', async (req, res) => {
  try {
    const { name, age, gender, mobile } = req.body;
    const newPerson = new Person({ name, age, gender, mobile });
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /person/:id - Get a single person by ID
router.get('/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /person/:id - Update a person
router.put('/:id', async (req, res) => {
  try {
    const { name, age, gender, mobile } = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      { name, age, gender, mobile },
      { new: true }
    );
    if (!updatedPerson) return res.status(404).json({ error: 'Person not found' });
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /person/:id - Delete a person
router.delete('/:id', async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);
    if (!deletedPerson) return res.status(404).json({ error: 'Person not found' });
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;