// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');
const { check, validationResult } = require('express-validator');
const { ensureAuthenticated } = require('../config/auth');

// Create comment
router.post('/create', ensureAuthenticated, [
    check('content', 'Content is required').not().isEmpty()
], async (req, res) => {
    // Check validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('error_msg', errors.array()[0].msg);
        res.redirect('back');
    } else {
        // Create comment
        const comment = new Comment({
            content: req.body.content,

            // Set user
            user: req.user._id,

            // Set post
            post: req.body.post
        });

        // Save comment
        await comment.save();

        // Add comment to post

        // Find post

        // Add comment to post

        // Save post

        // Redirect
        req.flash('success_msg', 'Comment created');
        res.redirect('back');
    }
});




