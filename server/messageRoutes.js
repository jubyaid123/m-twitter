const express = require('express');
const router = express.Router();
const messageModel = require('./messageModel'); // Adjust the path as needed

// Post a new message
router.post('/', async (req, res) => {
    try {
        const newMessage = await messageModel.createMessage(req.body);
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update likes for a message
router.put('/like/:id', async (req, res) => {
    try {
        const updatedMessage = await messageModel.updateLikes(req.params.id);
        res.json(updatedMessage);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update dislikes for a message
router.put('/dislike/:id', async (req, res) => {
    try {
        const updatedMessage = await messageModel.updateDislikes(req.params.id);
        res.json(updatedMessage);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Additional routes can be added here, such as delete message, get a specific message, etc.

module.exports = router;
